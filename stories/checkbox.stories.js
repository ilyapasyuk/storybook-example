import React from "react";

import {Checkbox} from "../Components/Checkbox";


export default {
    title: "Example/Checkbox",
    component: Checkbox,
}

export const withLabel = (args) => <Checkbox {...args}/>

withLabel.args = {
    label: 'My label',
    isChecked: true,
    id: 'my-checkbox'
}
