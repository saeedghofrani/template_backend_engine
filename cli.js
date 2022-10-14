const fs = require('fs');
const ControllerTemplate = require('./templates/controller')

async function createDirectory(path) {
    try {
        return await fs.promises.mkdir(path, {recursive: true});
    } catch (e) {
        console.log(e)
    }
}

async function createFile(path, name, data = '//created by ESTER') {
    try {
        return fs.promises.writeFile(`${path}/${name}`, data)
    } catch (e) {
        console.log(e)
    }
}

function readConsole() {
    return Object.values(process.argv).slice(2).join(' ').toString();
}

async function createStructuredFile(path) {
    try {
        await createDirectory(path);

        await createDirectory(`${path}/core`);
        await createDirectory(`${path}/core/dto`);
        await createDirectory(`${path}/core/dto/${path}`);

        await createFile(`${path}/core/dto/${path}`, `create.${path}.dto.ts`);
        await createFile(`${path}/core/dto/${path}`, `update.${path}.dto.ts`);
        await createFile(`${path}/core/dto/${path}`, `find.${path}.dto.ts`);

        await createDirectory(`${path}/core/enum`);
        await createDirectory(`${path}/core/enum/${path}`);
        await createDirectory(`${path}/core/controller`);

        await createFile(`${path}/core/controller`, `${path}.controller.ts`,ControllerTemplate(path, capitalizeFirstLetter(path)) );
//ControllerTemplate.ControllerTemplate(path, capitalizeFirstLetter(path))
        await createDirectory(`${path}/core/response`);
        await createDirectory(`${path}/core/response/${path}`);

        await createFile(`${path}/core/response/${path}`, `${path}.cu.result.ts`);
        await createFile(`${path}/core/response/${path}`, `${path}.g.result.ts`);

        await createDirectory(`${path}/core/filter`);
        await createDirectory(`${path}/core/filter/${path}`);

        await createFile(`${path}/core/filter/${path}`, `${path}.filter.dto.ts`);

        await createDirectory(`${path}/core/entities`);

        await createFile(`${path}/core/entities`, `${path}.entity.ts`);

        await createDirectory(`${path}/core/pagination`);
        await createDirectory(`${path}/core/pagination/${path}`);

        await createFile(`${path}/core/pagination/${path}`, `${path}.page.dto.ts`);

        await createDirectory(`${path}/module`);
        await createDirectory(`${path}/module/${path}`);
        await createDirectory(`${path}/module/${path}/service`);

        await createFile(`${path}/module/${path}/service`, `${path}.service.ts`);

        await createDirectory(`${path}/module/${path}/repository`);

        await createFile(`${path}/module/${path}/repository`, `${path}.repository.ts`);

    } catch (e) {
        console.log(e)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

createStructuredFile(readConsole());