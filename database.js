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


      await request.query(
        `INSERT INTO eksamen.users (brugernavn, email, password, repeatpassword)
        VALUES @brugernavn, @email, @password, @repeatpassword`) // disse skal bruges ALLE steder hvor der er brugerinput 
  
    } catch (err) {
     alert('Fejl ved indsættelse:', err);
    } finally {
      await sql.close(); //  !! afbryder endeligt forbindelsen i slutningen af funktionen (finally)
    }
  }

  // funktion "opret konto"
  async function createAccount(kontoID, brugernavn, navn, valuta, saldo, oprettelses_dato, tilstand, reference_til_bank) {
    try {
        await sql.connect(config);

        const oprettelses_dato = new Date();
        let tilstand = "åben"; // kontoen kan jo lukkes derfor har vi valgt "let"
        let saldo = 0; // saldo er 0 ved oprettelse, da der er ingen transaktioner endnu

        request.input('brugernavn', sql.VarChar, brugernavn) //
        request.input('navn', sql.VarChar, navn) //
        request.input('valuta', sql.VarChar, valuta) //
        request.input('reference_til_bank', sql.VarChar, reference_til_bank) //


        await request.query (
          `INSERT INTO dbo.accounts (kontoID, brugernavn, navn, valuta, saldo, oprettelses_dato, tilstand, reference_til_bank)
        VALUES @kontoID, @brugernavn, @navn, @valuta, ${saldo}, ${oprettelses_dato}, ${tilstand}, reference_til_bank
        `);

        console.log('Konto tilføjet');

    } catch (err) {
      alert('Fejl ved oprettelse:', err);
    } finally {
      await sql.close(); //  !! afbryder endeligt forbindelsen i slutningen af funktionen (finally)
    }


}

console.log(12);
