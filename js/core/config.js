export const sidebarData = [
    {
        "iconUrl": "assets/svg/sidebar/dashboard.svg",
        "title": "Dashboard"
    },
    {
        "iconUrl": "assets/svg/sidebar/incidents.svg",
        "title": "Incidents"
    },
    {
        "iconUrl": "assets/svg/sidebar/network.svg",
        "title": "Network"
    },
    {
        "iconUrl": "assets/svg/sidebar/risk_m.svg",
        "title": "Risk Management"
    },
    {
        "iconUrl": "assets/svg/sidebar/policies.svg",
        "title": "Policies"
    },
    {
        "iconUrl": "assets/svg/sidebar/reports.svg",
        "title": "Reports"
    },
    {
        "iconUrl": "assets/svg/sidebar/quarantine.svg",
        "title": "Quarantine"
    },
    {
        "iconUrl": "assets/svg/sidebar/companies.svg",
        "title": "Companies"
    },
    {
        "iconUrl": "assets/svg/sidebar/accounts.svg",
        "title": "Accounts"
    },
    {
        "iconUrl": "assets/svg/sidebar/sandbox_a.svg",
        "title": "Sandbox Analyzer"
    },
    {
        "iconUrl": "assets/svg/sidebar/email_security.svg",
        "title": "Email Security"
    },
    {
        "iconUrl": "assets/svg/sidebar/configuration.svg",
        "title": "Configuration"
    }
];


const formChapte1 ={
    title:"Details",
    inputs:[
        {id:"select-type",labelName: "Type", type: "select", placeHolder: "Executive Summary", isRequired: false, options:[]},
        {id:"select-company",labelName: "Company", type: "select", placeHolder: "Company Name", isRequired: false, options:[]},
        {id:"name",labelName: "Name", type: "text", placeHolder: "Placeholder", isRequired: true}
    ]
}

const formChapte2 ={
    title:"Settings",
    inputs:[ 
        {id:"radio-time",labelName: "", type: "radio", placeHolder: "Placeholder", isRequired: false, isParent: true,
            options:[{name:"Export now", value: 0,checked: false},{name:"Scheduled", value: 1,checked: true}]},
            {isChild:true, parentId: "radio-time",parentValue: 1,id:"selct-reccurence",labelName: "Recurrence", type: "select", placeHolder: "Weekly", isRequired: false,
            options:[{name:"Weekly", value: 0,checked: true}]},
            {isChild:true, parentId: "radio-time",parentValue: 1,id:"selct-on",labelName: "On", type: "select", placeHolder: "Monday", isRequired: false,
            options:[{name:"Monday", value: 0,checked: true},{name:"Tuesday", value: 1,checked: true}]},
        {id:"selct-time",labelName: "Reporting interval", type: "select", placeHolder: "Placeholder", isRequired: false,
            options:[{name:"Last 7 days", value: 0,checked: true}]},
        {id:"checkbox-export",labelName: "Attach files", type: "checkbox", placeHolder: "Placeholder", isRequired: false,
            options:[{name:"Dashboard PDF", value: 0, checked: true},{name:"Details as CSV", value: 1,checked: true},{name:"Archive files", value: 2,checked: false}]}, 
    ]
}
export const formData={
    closeWindow: false,
    title: "Create Report",
    chapters: [formChapte1,formChapte2]
};