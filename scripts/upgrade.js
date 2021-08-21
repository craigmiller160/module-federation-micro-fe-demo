const path = require('path');
const fs = require('fs');
const spawn = require('cross-spawn');

const parentsDir = path.join(__dirname, '..', 'parents');
const childrenDir = path.join(__dirname, '..', 'children');
const utilitiesDir = path.join(__dirname, '..', 'utilities');

const doUpgrade = (rootDir, dependencyName) => {
    fs.readdirSync(rootDir)
        .map((dirName) => {
            const dirPath = path.join(rootDir, dirName);
            const packageJsonPath = path.join(dirPath, 'package.json');
            return [dirPath, packageJsonPath];
        })
        .filter(([dirPath, packageJsonPath]) => {
            const packageJson = require(packageJsonPath);
            return !!packageJson.dependencies?.[dependencyName] ||
                !!packageJson.devDependencies?.[dependencyName]
        })
        .forEach(([dirPath]) => {
            process.chdir(dirPath);
            console.log('Upgrading')
            spawn.sync('yarn', [
                'upgrade',
                dependencyName
            ], {
                stdio: 'inherit',
                cwd: dirPath
            });
            console.log('Done');
        });
};

if (process.argv.length < 3) {
    throw new Error('Need name of dependency to upgrade');
}

doUpgrade(parentsDir, process.argv[2]);