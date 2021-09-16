categories = ['None', 'Fruit&Veg', 'Meat']

stores = [{'name' : 'asda', 
           'url' : "https://groceries.asda.com/", 
           'search' : 'search/', 
           'Fruit&Veg' : '/products?facets=Category.super_dept_name%3AFruit%2C+Veg+%26+Salad&',
           'Meat' : '/products?facets=Category.super_dept_name%3AFresh+Food+%26+Bakery&', 
           'sort': 'sort=price+asc'},

          {'name' : 'tesco', 
           'url' : "https://www.tesco.com/", 
           'search' : 'groceries/en-GB/search?query=', 
           'Fruit&Veg' : '&department=Fresh%20Salad%2C%20Coleslaw%20%26%20Sandwich%20Fillers&viewAll=department&',
           'Meat' : '&department=Fresh%20Meat%20%26%20Poultry&viewAll=department', 
           'sort': 'sortBy=priceAscending'},
           
           {'name' : 'morrisons', 
            'url' : "https://groceries.morrisons.com/", 
            'search' : 'search?entry=', 
            'Fruit&Veg' : '&clusterPath=market-street-184295,market-street-fruit-veg-183800',
            'Meat' : '&clusterPath=meat-poultry-179549', 
            'sort': '&sort=PRICE_ASC'}]