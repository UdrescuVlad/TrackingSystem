*** Settings ***
Library  Selenium2Library

*** Variables ***
${browser}  chrome
${page}  http://localhost:4200/

*** Keywords ***

Go to Angular-Server

    Open Browser  ${page}  ${browser}
    Maximize Browser Window


Check Every Elements from Navigation Bar

    Log  Check if Dashboard, Search customer, Customer by ID/Name is displayed
    
    ${Dashboard_value}=  Get Text    //body/*//nav/div/ul/li/a
    Log  ${Dashboard_value}
    ${Assert_dashboard_value}=  Run Keyword And Return Status    Should be Equal  ${Dashboard_value}  Dashboard
    Run Keyword If    '${Assert_dashboard_value}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong
    
    ${SearchCustomer_value}=  Get Text    //body/*//nav/div/ul/div/button
    Log  ${SearchCustomer_value}
    ${Assert_searchCustomer_value}=  Run Keyword And Return Status    Should be Equal  ${SearchCustomer_value}  Search Customer
    Run Keyword If    '${Assert_searchCustomer_value}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong

    ${CustomerByID_value}=  Get Text    //*[@id="search-type"]/li[1]/a
    Log  ${CustomerByID_value}
    ${Assert_searchCustomerByID_value}=  Run Keyword And Return Status    Should be Equal  ${CustomerByID_value}  	Customer by ID
    Run Keyword If    '${Assert_searchCustomerByID_value}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong

    ${CustomerByName_value}=  Get Text    //*[@id="search-type"]/li[2]/a
    Log  ${CustomerByName_value}
    ${Assert_searchCustomerByName_value}=  Run Keyword And Return Status    Should be Equal  ${CustomerByName_value}  Customer by Name
    Run Keyword If    '${Assert_searchCustomerByName_value}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong

Check Every Elements from Navigation Bar is Clickable
    
    Log  Click on Dashboard page
    Click Element    //body/*//nav/div/ul/li/a
    Sleep  1s

    Log  Click on Search Customer
    Click Element    //body/*//nav/div/ul/div/button
    Sleep  1s

    Log  Click on Customer by ID
    Click Element    //*[@id="search-type"]/li[1]/a
    Sleep  1s

    Log  Click on Customer by Name
    Click Element    //*[@id="search-type"]/li[2]/a
    Sleep  1s

#Dashboard
Check Table Does Exist
    
    Log  Access Dashboard and verify if table exist
    Click Element    //body/*//nav/div/ul/li/a
    Sleep  1s
    Element Should Be Visible    //body//*/*//table

#Customer By ID    
Check If Text ID Is Present And Verify It
    
    Log  Check if text id is present and verify it
    Click Element    //*[@id="search-type"]/li[1]/a
    Sleep  1s
    Element Should Be Visible    //body//html//form/div/label
    ${ID_text}=  Get Text    //body//html//form/div/label
    ${Assert_ID_text}=  Run Keyword And Return Status    Should be Equal  ${ID_text}  Search customer by his id 
    Run Keyword If    '${Assert_ID_text}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong

Check Input ID Value

    Log  Check that user can type an id in input field
    Element Should Be Visible    id:get_id
    Element Should Be Enabled    id:get_id
    Input Text    id:get_id    2

#Customer By Name
Check If Text Name Is Present And Verify It

    Log  Check if text name is present and verify it
    Click Element    //*[@id="search-type"]/li[2]/a
    Sleep  1s
    Element Should Be Visible    //body//html//form/div/label
    ${Name_text}=  Get Text    //body//html//form/div/label
    ${Assert_Name_text}=  Run Keyword And Return Status    Should be Equal  ${Name_text}  Search customer by his name 
    Run Keyword If    '${Assert_Name_text}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong

Check Input Name Value

    Log  Check that user can type an name in input field
    Element Should Be Visible    id:get_name
    Element Should Be Enabled    id:get_name
    Input Text    id:get_name    test2Name
    
Check Search Buttton Works
    
    Log  Check that button is displayed, have the proper text and can be clickable
    Element Should Be Visible    //body//html//form/button
    ${searchButton_text}=  Get Text    //body//html//form/button
    ${Assert_searchButton_text}=  Run Keyword And Return Status    Should be Equal  ${searchButton_text}  Search
    Run Keyword If    '${Assert_searchButton_text}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong
    Click Button    //body//html//form/button

Check Current Link For Name Searched

    Sleep  2s
    ${url} =  Execute Javascript  return window.location.href;
    Log  ${url}
    ${Assert_url}=  Run Keyword And Return Status    Should be Equal  ${url}  http://localhost:4200/customer/name/test2Name
    Run Keyword If    '${Assert_url}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong


Check Current Link For ID Searched

    Sleep  2s
    ${url} =  Execute Javascript  return window.location.href;
    Log  ${url}
    ${Assert_url}=  Run Keyword And Return Status    Should be Equal  ${url}  http://localhost:4200/customer/2
    Run Keyword If    '${Assert_url}' == 'True'
        ...  Log  ok
        ...  ELSE
        ...  Log  something went wrong