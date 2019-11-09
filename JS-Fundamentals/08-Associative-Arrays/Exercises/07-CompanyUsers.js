function companyUsers(array) {
    let companies = {};
    array.forEach(element => {
        let [company, user] = element.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        if (!companies[company].includes(user)) {
            companies[company].push(user)
        }
    });
    let orderedCompanies = {};
    
    orderCompanies(companies);
    printOrderedCompanies(orderedCompanies);

    function orderCompanies(companies) {
        Object.keys(companies).sort().forEach(function(key) {
            orderedCompanies[key] = companies[key];
          });
    }

    function printOrderedCompanies(orderedCompanies) {
        for (const property of Object.keys(orderedCompanies)) {
            console.log(property);
            orderedCompanies[property].forEach(element => {
                console.log(`-- ${element}`);
                
            });
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
  ]);