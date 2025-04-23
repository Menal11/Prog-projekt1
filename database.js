import sql from 'mssql';

const config = {
    user: 'Zaynab',
    password: 'eksamen25@',
    server: 'eksamenserverr.database.windows.net',
    database: 'eksamendb',
    options: {
      encrypt: true, // vigtigt for Azure
      enableArithAbort: true
    }
  };

async function createUser(brugernavn, email, password, repeatpassword) {
    try {
      await sql.connect(config);

      const request = new sql.Request()
      
      request.input('brugernavn', sql.VarChar, brugernavn) // 
      request.input('email', sql.VarChar, email) //
      request.input('password', sql.VarChar, password) //
      request.input('repeatpassword', sql.VarChar, repeatpassword) //


      await request.query(`INSERT INTO eksamen.users (brugernavn, email, password, repeatpassword)
        VALUES @brugernavn, @email, @password, @repeatpassword`) // disse skal bruges ALLE steder hvor der er brugerinput 
  
    } catch (err) {
     alert('Fejl ved indsættelse:', err);
    } finally {
      await sql.close(); //  !! afbryder endeligt forbindelsen i slutningen af funktionen (finally)
    }
  }