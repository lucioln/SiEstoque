import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


function produtosPDF(produtos){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const titlePdf = [{
        text: 'Produtos',
        fontSize: 15,
        bold: true,
        margin: [20,20,0,45] 
    }];

    const dados = produtos.map((produto)=>{
        return [
            {text:produto.id, style: 'tableHeader', fontSize:9 , margin:[0,2,0,2]},
            {text:produto.nome, style: 'tableHeader', fontSize:9, margin:[0,2,0,2] },
            {text:produto.categoria, style: 'tableHeader', fontSize:9, margin:[0,2,0,2] },
            {text:produto.quantidade, style: 'tableHeader', fontSize:9, margin:[0,2,0,2] },
            {text:produto.validade, style: 'tableHeader', fontSize:9, margin:[0,2,0,2] }
        ]
    });

    const details = [
        {
            table:{
                headerRows: 1,
                widths: ['*','*','*','*','*'],
                body: [
                    [
                        {text:'Código', style: 'tableHeader', fontSize:10 },
                        {text:'Nome', style: 'tableHeader', fontSize:10 },
                        {text:'Categoria', style: 'tableHeader', fontSize:10 },
                        {text:'Quantidade', style: 'tableHeader', fontSize:10 },
                        {text:'Validade', style: 'tableHeader', fontSize:10 }
                    ],
                    ...dados
                ]
            },
            layout: 'headerLineOnly'
        }
    ];

    function footerPdf(currentPage, pageCount){
        return (
            {text: currentPage + '/' + pageCount,
            alignment: 'right',
            fontSize: 9,
            margin: [0, 10, 20, 0]
        }
        )
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [titlePdf],
        content: [details],
        footer: footerPdf
    }

    pdfMake.createPdf(docDefinitions).download();
}

export default produtosPDF;