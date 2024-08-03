# Monorepo Workspace

```zsh
# To create a new workspace
% npm cache clean --force 
% ng new my-workspace --no-create-application

# To create a new application in workspace
% ng generate application my-app 
% ng generate library my-lib 

# Sample 
% npm cache clean --force 
% ng new workspace --no-create-application --skip-git --skip-tests 
# Edit the default projects folder newProjectRoot in angular.json of workspace if you like 
% cd workspace 
% ng generate application my-app --skip-tests 
% ng generate library my-lib 
```

# Remove an application from an Angular workspace 
To remove an application from an Angular workspace, you need to perform several steps manually because there is no single command to remove an application using the Angular CLI. 
1. Delete the Application Directory: rm -rf projects/my-application 
2. Update angular.json. 
3. Update tsconfig.json and Other TypeScript Configuration Files. 
4. Update package.json (if necessary).
5. Update Workspace Configuration Files: There might be other configuration files that reference the application, such as CI/CD configuration files, karma.conf.js, protractor.conf.js, etc. Review these files and remove any references to the removed application. 
6. If you removed dependencies from package.json, run npm install to update the node_modules directory: % npm install 