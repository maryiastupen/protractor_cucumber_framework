## Test framework based on the combination o protractor with cucumber

### *Preconditions: JDK, Node.js*

### Steps to be reproduced before executing:
    
    npm install -g gulp
    npm install -g webdriver-manager

### Open a command window in the project's folder and run:
    
     npm install
     webdriver-manager update
     webdriver-manager start

### Then open another command window in the project's folder and selectively run:
    
     gulp run
     gulp run --browser=firefox
     gulp run --tags="@data_change"
     gulp run --tags="@basket"
     gulp run --tags="@search"
