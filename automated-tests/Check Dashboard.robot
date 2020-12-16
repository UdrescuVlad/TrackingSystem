*** Settings ***
Resource  functions.robot

*** Test Cases ***
Check If Table Exist
    
    Go to Angular-Server
    Check Table Does Exist
    Close Browser