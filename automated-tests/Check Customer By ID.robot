*** Settings ***
Resource  functions.robot

*** Test Cases ***

Check ID text

    Go to Angular-Server
    Check If Text ID Is Present And Verify It
    Check Input ID Value
    Check Search Buttton Works
    Check Current Link For ID Searched
    Close Browser