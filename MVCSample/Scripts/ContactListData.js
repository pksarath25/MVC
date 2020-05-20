'use strict';

const e = React.createElement;

const element = React.createElement(
    "section",
    { id: "contact-list" },
    React.createElement("h3", null, "Contacts"),
    React.createElement(
        "table",
        { className: "contacts-table" },
        React.createElement(
            "tbody",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Email")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Shinto Thomas"),
                React.createElement("td", null, "sthomas@suyati.com")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Praphul"),
                React.createElement("td", null, "pnangeelil@suyati.com")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Shamnad V A"),
                React.createElement("td", null, "sabdul@suyati.com")
            )
        )
    )
);

class ContactListJSX extends React.Component {
    render() {
        return (element);
    }
}


const domContainer = document.querySelector('#contact_list_container');
ReactDOM.render(e(ContactListJSX), domContainer);