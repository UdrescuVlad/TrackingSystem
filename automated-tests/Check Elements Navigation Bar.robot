*** Settings ***
Resource  functions.robot

*** Test Cases ***
Check Navigation Bar Elements
    
    Go to Angular-Server
    Check Every Elements from Navigation Bar
    Close Browser

Check Navigation Bar Elements is Clickable

    Go to Angular-Server
    Check Every Elements from Navigation Bar is Clickable
    Close Browser