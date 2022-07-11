### Conversor de logs json para uma formatação mais legivel para investigação e análise.


- Necessário instalação do node na máquina.
- Cole os arquivos json no mesmo direito do arquivo e rode o comando.

        node convert.js filename.json

- É possível passar mais de um arquivo

        node convert.js filename-1.json filename-2.json ...

- Comando para gerar tags

        git tag -a v1.0.0 -m "1.0.0"
        git push origin v1.0.0