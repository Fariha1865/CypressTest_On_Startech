

it("Startech Test", function(){


  cy.visit('https://www.startech.com.bd/')
 


  
     
  cy.wait(3000)
 
  
  cy.get('a[class="brand"]').should('have.attr','href','https://www.startech.com.bd/').rightclick({force:true})
  cy.wait(2000)
  cy.get('a[class="brand"]').click()
  cy.wait(2000)
  let c=1
  const nav= ['Desktop','Laptop','Component','Monitor','UPS','Tablet','Office Equipment','Camera','Security','Networking','Accessories','Software','Server & Storage','TV','AC','Gadget','Gaming']
  cy.get('#nav-toggler').click({force:true})
  nav.forEach(page => {

    let x = `.navbar-nav > :nth-child (${c}) > :nth-child(1)`
    //let x = ".navbar-nav > :nth-child("+c+") > :nth-child(1)"
    cy.get(x).should('contain',page).rightclick({force:true})
    c=c+1
  
  
   //cy.contains(page).rightclick({force:true})
   cy.wait(500)

  })

  cy.get('#nav-toggler').click({force:true})
  const pages = ['Offers','Deals','PC Builder','Compare','Account']
  

  pages.forEach(page => {
    cy.wait(1500)
   cy.get('div[class="ac-content"]').should('contain',page)
   cy.wait(2000)
   cy.contains(page).rightclick({force:true, multiple:true})
   cy.wait(2000)
   cy.contains(page).click({force:true})
  
  
  

})


cy.wait(3000)


cy.get('#input-username').type('farihaamin187@gmail.com')
cy.wait(2000)
cy.get('#input-password').type('mist1865')
cy.wait(2000)
cy.get('form > .btn').rightclick()
cy.wait(1500)
cy.get('form > .btn').click({force:true})

cy.wait(3000)
  cy.get('div[class="ac search-toggler"]').click()
  cy.get('input').type('MacBook {enter}')

  cy.wait(3000)

  cy.get('div[class="p-item-img"]').find('img').should('have.attr', 'alt').and('match', /MacBook/)

  cy.get('div[class="p-item-img"]').rightclick({multiple:true}).its('length')
  .then(n => {
    
    cy.get('div[class="custom-select"]').should('contain', n)

  })


 cy.wait(4000)

  cy.get(':nth-child(1) > .p-item-inner > .p-item-details > .p-item-price > span').invoke('text').should('match',/৳/).then(text => {

        
       let product_cost = text
       cy.log(product_cost)
       cy.get(':nth-child(1) > .p-item-inner > .p-item-details > .actions > .btn-add-cart').rightclick()
        cy.wait(3000)
       cy.get(':nth-child(1) > .p-item-inner > .p-item-details > .actions > .btn-add-cart').should('contain',"Buy Now").click({force:true})
      
       cy.get('[href="https://www.startech.com.bd/checkout/cart"] > .btn').click()
       cy.get('td[class="text-right rs-none"]').invoke('text').should('match',/৳/).then(text => {

        let Unit_price = text
        Unit_price=Unit_price.replace('Unit Price','')
        expect(Unit_price).equal(product_cost)
        Unit_price=Unit_price.replace(',','')
        Unit_price=Unit_price.replace('৳','')
        var n = Number(Unit_price)
        
        cy.log(n)
        cy.get(':nth-child(4) > .input-group > .form-control').should('have.attr','value').then(value => {

               var Quantity = value
               cy.log(Quantity)
               var n2 = Number(Quantity)
               
               n=n*n2
               
        cy.get(':nth-child(2) > .amount').invoke('text').should('match',/৳/).then(text => {
                    
                     let Total_price = text
            Total_price=Total_price.replace(',','')
            Total_price=Total_price.replace('৳','')
            var n3 = Number(Total_price)
            
            expect(n).eq(n3)
       })
      })
    })

    
  })

  
cy.wait(1000)
 
 
cy.wait(20000)

  cy.get('a[title="Facebook"]').rightclick().wait(2000)
  
cy.get('a[title="Facebook"]').should('have.attr','href','https://www.facebook.com/star.tech.ltd/').then(($nav) => {
  
  cy.origin('https://www.facebook.com', () => {
  cy.visit('/star.tech.ltd/')
  

  })
  })
  cy.wait(2000)
  
  cy.go('back')
  //cy.visit('https://www.startech.com.bd/account/account')
  
  cy.wait(1000)

    cy.get('a[title="Instagram"]').rightclick().wait(2000)
  
    cy.get('a[title="Instagram"]').should('have.attr','href','https://www.instagram.com/startech.com.bd/').then(($nav) => {
      
      cy.origin('https://www.instagram.com', () => {
      cy.visit('/startech.com.bd/')
      
    
      })
      })
      cy.wait(3000)
      
      cy.visit('https://www.startech.com.bd/account/account')


      cy.get('a[title="Youtube"]').rightclick().wait(2000)
  
  cy.get('a[title="Youtube"]').should('have.attr','href','https://www.youtube.com/channel/UC-SDF_4DM3unoP7JeAodz2g').then(($nav) => {
    
    cy.origin('https://www.youtube.com', () => {
    cy.visit('/channel/UC-SDF_4DM3unoP7JeAodz2g')
    
  
    })
    })
    cy.wait(3000)
    
    cy.visit('https://www.startech.com.bd/account/account')
 
/*win.stop()
cy.get('a[title="Facebook"]').should('have.attr','href','https://www.facebook.com/star.tech.ltd/').invoke('removeAttr', 'target').click()
*/



})