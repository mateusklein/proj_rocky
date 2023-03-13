const { Console } = require("console");
const fs = require("fs");

fs.readFile("./broken_database_1.json", "utf-8", (error, arq)=>{
    try{
        let lista = [];
        const user = JSON.parse(arq);
        var i=0;
        while(user[i]!=null){
            //AJEITANDO VENDAS
            vendas = user[i].vendas;
            vendass = parseInt(vendas);
            //AJEITANDO VENDAS

            //AJEITANDO O NOME
            var palavra = "";
            var name = user[i].nome;
            for(var j=0; j<name.length; j++){
                if(name[j]=="ø"){
                    palavra += "o";
                }
                else if(name[j]=="æ"){
                    palavra += "a";
                }
                else{
                    palavra += name[j];
                }
            }
            const data={
                data:user[i].data,
                id_marca_:user[i].id_marca_,
                vendas:vendass,
                valor_do_veiculo:user[i].valor_do_veiculo,
                nome:palavra,
            };
            lista[i]=data;
            i++;
            //AJEITANDO O NOME
        }
        const dataString = JSON.stringify(lista, null);
        fs.writeFileSync("./database1.json", dataString, "utf-8");
    }catch(e){
        console.log(e);
    }
});

fs.readFile("./broken_database_2.json", "utf-8", (error, arq)=>{
    try{
        let lista = [];
        const user = JSON.parse(arq);
        var i=0;
        while(user[i]!=null){
            //AJEITANDO A MARCA
            var palavra = "";
            var name = user[i].marca;
            for(var j=0; j<name.length; j++){
                if(name[j]=="ø"){
                    palavra += "o";
                }
                else if(name[j]=="æ"){
                    palavra += "a";
                }
                else{
                    palavra += name[j];
                }
            }
            const data={
                id_marca:user[i].id_marca,
                marca:palavra,
            };
            lista[i]=data;
            i++;
            //AJEITANDO A MARCA
        }
        const dataString = JSON.stringify(lista, null);
        fs.writeFileSync("./database2.json", dataString, "utf-8");
    }catch(e){
        console.log(e);
    }
});