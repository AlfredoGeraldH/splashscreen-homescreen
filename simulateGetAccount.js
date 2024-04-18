const simulateGetAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(true) {
          resolve({
            name: "Alfredo Gerald Hartono",
            balance: "2.000.000",
            no_rek: "1234567890",
            poin: "3000",
          });
        } else {
          reject("Error Karena tidak berhasil");
        }
      }, );
    });
  };

  export default simulateGetAccount