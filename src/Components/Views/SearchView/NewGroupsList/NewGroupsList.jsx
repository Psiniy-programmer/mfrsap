import React, {Component} from "react";
import {connect} from "react-redux";
import MenuItem from "../../../MenuItem/MenuItem";
import {Link} from 'react-router-dom';
import "./style.css";
import {changeLangEngToRus, clearSuffix, switchRomanToNumber, translateSuffixToRus} from "../../../../helpers/helpers";

class NewGroupsList extends Component {
    getList() {
        const {groupsList, match} = this.props;

        if (groupsList.length === 0) {
            return 'Список пуст'
        }

        return groupsList.map((group) => {
            return (
                <Link
                    key={group.groupname}
                    to={`${match.url}/groupid=${group.groupid}`}
                >
                    <MenuItem text={group.groupname}/>
                </Link>
            );
        });
    }

    generateList() {
        const {SGroupsList, match} = this.props;
        const caf = changeLangEngToRus(match.params.department);
        const suffix = translateSuffixToRus(match.params.suffix);
        const semesterNumber = switchRomanToNumber(match.params.course) * 2;
        const generatedList = [];
        console.log(semesterNumber)
        // if (!caf || !suffix || !semesterNumber) {
        //     return;
        // }

        // groupName выступает в роли ключа, из-за структуры апи
        for (let groupName in SGroupsList.data) {
            // Проверяем совпадение на кафедру
            const splittedName = groupName.split('-');

            if (splittedName[0] !== caf) {
                continue;
            }
            // Проверяем совпадение по суффиксу
            if (groupName[groupName.length - 1].toLowerCase() !== suffix && groupName[groupName.length - 1].toLowerCase() !== 'с') {
                continue;
            }


            // Проверем на соответствие курсу
            let groupSemester;
            groupSemester = Number(splittedName[1][0]);

            if (groupSemester === semesterNumber || groupSemester === semesterNumber - 1) {
                let finalName = groupName;
                if (groupName[groupName.length - 1].toLowerCase() === 'с') {
                    finalName = finalName.slice(0, -1);
                };

                generatedList.push({
                    groupname: finalName,
                    groupid: SGroupsList.data[groupName].groupid
                });
            }
        }

        console.log(generatedList)

        if (generatedList.length === 0) {
            return 'Список пуст'
        }

        return generatedList.map((group) => {
            return (
                <Link
                    key={group.groupid}
                    to={`${match.url}/groupid=${group.groupid}`}
                >
                    <MenuItem text={group.groupname}/>
                </Link>
            );
        });

    }

    render() {

        return <div className="NewGroupsList">
            {this.generateList()}
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        SGroupsList: state.groupsList,
        groupsList: state.newGroupsList,
    };
};

export default connect(mapStateToProps)(NewGroupsList);
