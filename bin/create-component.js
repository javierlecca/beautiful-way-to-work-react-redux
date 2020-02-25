'use strict';

const fs            = require('fs');
const { promisify } = require('util');

// create promises to modules fs.
const writeFile     = promisify(fs.writeFile);
const mkdir     = promisify(fs.mkdir);
//grab provided args.
const [,, ...args]  = process.argv;

//Content Controller
const contentController= `
import React from 'react';
import View from './${args[0]}-view';

class ${args[0]} extends React.Component {
    render() {
        return (
            <View/>
        );
    }
}
export default ${args[0]};
`;

//Content View
const contentView= `
import React from 'react';
import './style.css';

function View(){
    return(
        <div className="${args[0]}"> Say hi!</div>
    );
}
export default View;
`;


const contentCss = `
.${args[0]}{
    display: block;
}`;

//method to write the schedule to the component
const createSchedule = async () =>{
    if (!fs.existsSync(`src/components/${args[0]}`)){
        await mkdir(`src/components/${args[0]}`)
        await writeFile(`src/components/${args[0]}/${args[0]}-controller.js`, contentController);
        await writeFile(`src/components/${args[0]}/${args[0]}-view.js`, contentView);
        await writeFile(`src/components/${args[0]}/style.css`,contentCss);
        console.log(`Component ${args[0]} created !!!!`)
    }else{
        console.log(`Component ${args[0]} created before =( `);
    }
}

console.log(`creating component ${args[0]} ...`);

createSchedule();

