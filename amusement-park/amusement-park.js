
export function createVisitor(name, age, ticketId) {
    let ticket = {
      'name': name,
      'age': age,
      'ticketId' : ticketId
     }
      return ticket
    }
    
    
    export function revokeTicket(visitor) {
      
      visitor.ticketId = null
      return visitor
      
    }
    
    
    export function ticketStatus(tickets, ticketId) {
    
      switch(tickets[ticketId]){
        case null:
          return 'not sold'
          break;
        case undefined:
          return 'unknown ticket id'
          break;
        default:
          return `sold to ${tickets[ticketId]}`
      }
      
    }
    
    export function simpleTicketStatus(tickets, ticketId) {
     
      switch(tickets[ticketId]){
        case null:
          return 'invalid ticket !!!'
          break;
        case undefined:
          return 'invalid ticket !!!'
          break;
        default:
          return tickets[ticketId]
      }
      
    }
    
    
    export function gtcVersion(visitor) {
    
        
        return  visitor?.gtc?.version
    
    }