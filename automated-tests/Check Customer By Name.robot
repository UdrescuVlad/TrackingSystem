*** Settings ***
Resource  functions.robot

*** Test Cases ***

Check Name text

    Go to Angular-Server
    Check If Text Name Is Present And Verify It
    Check Input Name Value
    Check Search Buttton Works
    Check Current Link For Name Searched
    Close Browser