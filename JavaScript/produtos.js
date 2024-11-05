// Função para abrir o modal com o título, descrição e imagem do produto
function openModal(title, image) {
    let description = '';

    // Adiciona as descrições com base no título da categoria
    if (title === 'Moda Feminina') {
        description = `
            <strong>Conforto, Estilo e Elegância para Todos os Momentos 🌸</strong><br><br>
            Na nossa categoria Moda Feminina, você encontra um mix perfeito de peças que atendem a todos os gostos e ocasiões. 
            Seja para um look casual do dia a dia, um evento especial ou aquele toque de estilo único, temos tudo o que você precisa para se sentir incrível!<br><br>
            <strong>O que você vai encontrar por aqui?</strong><br><br>
            <ul>
                <li><strong>Vestidos:</strong> Modelos versáteis, desde os mais clássicos até os mais modernos, para todas as formas e estilos.</li>
                <li><strong>Blusas e Camisetas:</strong> Peças indispensáveis no seu guarda-roupa, perfeitas para compor looks descontraídos ou sofisticados.</li>
                <li><strong>Calças e Saias:</strong> Conforto e sofisticação, desde as mais formais até as opções mais casuais.</li>
                <li><strong>Acessórios:</strong> Bijuterias, bolsas, cintos e chapéus para dar aquele toque final em qualquer produção.</li>
                <li><strong>Sapatos:</strong> Desde as opções mais casuais, como tênis e rasteirinhas, até os modelos de salto para arrasar nas ocasiões especiais.</li>
            </ul>
            E o melhor: nossa seleção está sempre em atualização! Trabalhamos com fornecedores que oferecem peças de qualidade, com tendência e atentas às suas necessidades, para que você encontre exatamente o que procura.<br><br>
             Em breve, mais novidades! Fique de olho nas nossas atualizações.
        `;
    } else if (title === 'Beleza') {
        description = `
            <strong>Cuide de Si com Produtos de Qualidade e Estilo 💄</strong><br><br>
            Na nossa categoria Beleza, você encontra tudo o que precisa para realçar sua naturalidade e se sentir ainda mais confiante. 
            Trabalhamos com maquiagens, cuidados com a pele, e muito mais!<br><br>
            <strong>O que você vai encontrar por aqui?</strong><br><br>
            <ul>
                <li><strong>Maquiagem:</strong> Bases, batons, sombras, iluminadores e mais para você criar looks incríveis e realçar sua beleza de forma única.</li>
                <li><strong>Cuidados com a Pele:</strong> Cremes hidratantes, máscaras faciais, esfoliantes e séruns para manter sua pele saudável e radiante.</li>
                <li><strong>Cabelos:</strong> Produtos para cuidados capilares, como shampoos, condicionadores, óleos, máscaras e finalizadores, para que seus fios fiquem sempre brilhantes e saudáveis.</li>
                <li><strong>Perfumes:</strong> Fragrâncias para todos os gostos, desde os florais e frescos até os mais marcantes e sofisticados.</li>
                <li><strong>Acessórios de Beleza:</strong> Pincéis, espelhos, pinças e outros itens essenciais para quem adora cuidar de cada detalhe da sua rotina de beleza.</li>
            </ul>
            Beleza é para todos! Fique ligada nas atualizações da nossa seção de beleza, pois estamos sempre trazendo novos itens e lançamentos para você. 
        `;
    } else if (title === 'Produtos Domésticos') {
        description = `
            <strong>Praticidade e Estilo para Seu Lar 🧹</strong><br><br>
            Na nossa categoria Produtos Domésticos, você encontra tudo o que precisa para tornar sua casa ainda mais acolhedora, organizada e cheia de estilo. 
            De utensílios de cozinha até decoração, temos tudo para transformar seu lar!<br><br>
            <strong>O que você vai encontrar por aqui?</strong><br><br>
            <ul>
                <li><strong>Utensílios de Cozinha:</strong> Panelas, talheres, tábuas de corte, formas e muito mais, para facilitar o preparo das suas receitas favoritas.</li>
                <li><strong>Decoração:</strong> Almofadas, quadros, vasos e objetos decorativos para dar aquele charme e personalidade aos seus ambientes.</li>
                <li><strong>Roupas de Cama, Mesa e Banho:</strong> Conforto e estilo, com jogos de cama, toalhas e acessórios para deixar sua casa ainda mais aconchegante.</li>
                <li><strong>Organização:</strong> Cestos, caixas organizadoras e prateleiras para otimizar seu espaço e manter tudo no lugar com praticidade.</li>
                <li><strong>Acessórios para Banheiro:</strong> Itens que combinam funcionalidade e beleza, como porta-toalhas, saboneteiras e organizadores.</li>
            </ul>
            Nossa seleção de produtos está sempre em atualização! Trabalhamos com marcas e fornecedores que prezam pela qualidade e inovação. 
        `;
    } else if (title === 'Eletrônicos') {
        description = `
            <strong>Tecnologia e Inovação ao Seu Alcance 📱</strong><br><br>
            Na nossa categoria Eletrônicos, você encontra uma seleção de produtos que vão transformar seu dia a dia. 
            Seja para otimizar sua rotina, se entreter ou dar aquele upgrade nos seus aparelhos, temos tudo o que você precisa para estar sempre conectado e por dentro das últimas tendências tecnológicas.<br><br>
            <strong>O que você vai encontrar por aqui?</strong><br><br>
            <ul>
                <li><strong>Smartphones e Acessórios:</strong> Modelos incríveis, com as funcionalidades que você ama, e acessórios como capinhas, carregadores e fones para deixar seu celular ainda mais completo.</li>
                <li><strong>Computadores e Notebooks:</strong> Equipamentos potentes para o trabalho, estudo e diversão, com marcas que oferecem desempenho e qualidade.</li>
                <li><strong>Áudio e Vídeo:</strong> Caixas de som, fones de ouvido, televisores e acessórios para transformar sua experiência de entretenimento.</li>
                <li><strong>Câmeras e Equipamentos Fotográficos:</strong> Para capturar todos os momentos com clareza e qualidade, seja para uso profissional ou pessoal.</li>
                <li><strong>Eletrodomésticos Inteligentes:</strong> Produtos como aspiradores robôs, smart TVs e outros itens conectados que trazem mais praticidade para sua casa.</li>
                <li><strong>Wearables:</strong> Relógios inteligentes, pulseiras e outros gadgets para você monitorar sua saúde e ter mais comodidade no seu dia a dia.</li>
            </ul>
            E o melhor de tudo: estamos sempre em busca das melhores novidades e inovações tecnológicas para oferecer a você produtos de alta qualidade e com o melhor custo-benefício. 
        `;
    } else if (title === 'Moda Masculina') {
        description = `
            <strong>Estilo, Conforto e Praticidade para o Homem Moderno 👔</strong><br><br>
            Na nossa categoria Moda Masculina, você encontra roupas e acessórios que unem estilo, conforto e praticidade para todas as ocasiões. 
            Temos desde camisas clássicas até peças casuais e modernas!<br><br>
            <strong>O que você vai encontrar por aqui?</strong><br><br>
            <ul>
                <li><strong>Camisas e Polos:</strong> Modelos clássicos e contemporâneos, perfeitos para compor looks casuais ou para um visual mais formal e sofisticado.</li>
                <li><strong>T-Shirts e Blusas:</strong> Peças indispensáveis para o dia a dia, que oferecem liberdade e conforto sem perder o estilo.</li>
                <li><strong>Calças e Bermudas:</strong> Opções versáteis que vão do básico ao mais sofisticado, ideais para qualquer ocasião, do trabalho ao lazer.</li>
                <li><strong>Jaquetas e Blazers:</strong> Para dar aquele toque de sofisticação aos seus looks ou para se proteger do frio com estilo.</li>
                <li><strong>Acessórios:</strong> Bolsas, cintos, bonés, relógios e muito mais, para completar qualquer produção com um toque de personalidade.</li>
            </ul>
            Nossa coleção está sempre sendo atualizada! Trabalhamos com marcas que trazem o que há de mais moderno e confortável para o guarda-roupa masculino. 
        `;
    } else if (title === 'Casa e Decoração') {
        description = `
            <strong>Transforme Seu Lar com Estilo e Conforto 🏡</strong><br><br>
            Na nossa categoria Casa e Decoração, você encontra tudo o que precisa para deixar sua casa ainda mais acolhedora, bonita e cheia de personalidade. 
            Desde pequenos detalhes até itens maiores que fazem toda a diferença, temos a seleção perfeita para quem deseja transformar seu espaço.<br><br>
            <strong>O que você vai encontrar por aqui?</strong><br><br>
            <ul>
                <li><strong>Móveis:</strong> Sofás confortáveis, mesas de jantar estilosas e muito mais, para transformar sua casa com funcionalidade e design.</li>
                <li><strong>Decoração:</strong> Quadros, almofadas, tapetes e outros itens para dar aquele toque especial aos seus ambientes.</li>
                <li><strong>Iluminação:</strong> Luminárias e abajures para criar a atmosfera perfeita e tornar seus ambientes mais acolhedores.</li>
                <li><strong>Organização e Armazenamento:</strong> Soluções práticas como prateleiras, cestos e caixas organizadoras para manter tudo no lugar com estilo.</li>
                <li><strong>Cama, Mesa e Banho:</strong> Jogos de cama, toalhas de mesa e acessórios de banho que combinam conforto e beleza.</li>
            </ul>
            Nossa seleção está sempre em atualização! Estamos atentos às últimas tendências em decoração para renovar sua casa com estilo e praticidade. 
        `;
    } else if (title === 'Brinquedos') {
        description = `
        <strong>Brinquedos Simples e Divertidos para os Pequenos 🧸</strong><br><br>
        Na nossa categoria de Brinquedos, você encontra opções simples, acessíveis e cheias de diversão para as crianças. 
        São brinquedos de plástico, fáceis de manusear e perfeitos para o dia a dia, que estimulam a criatividade e o aprendizado, tudo com muito carinho e segurança!<br><br>
        <strong>O que você vai encontrar por aqui?</strong><br><br>
        <ul>
            <li><strong>Brinquedos de Plástico:</strong> Bonequinhos, carrinhos, brinquedos de montar e muito mais, tudo de plástico resistente e com designs que as crianças adoram! </li>
            <li><strong>Pelúcias e Bichinhos Simples:</strong> Os bichinhos de pelúcia, ideais para abraçar e brincar, com cores vibrantes e tamanhos fofos! </li>
            <li><strong>Brinquedos de Construção Simples:</strong> Peças de montar, blocos e kits de fácil manuseio que ajudam as crianças a explorar e criar novas formas. </li>
            <li><strong>Brinquedos para Atividades ao Ar Livre:</strong> Bolas, petecas e outros brinquedos simples para brincar ao ar livre, estimulando a atividade física e diversão. </li>
            <li><strong>Figuras de Ação e Acessórios:</strong> Bonecos de ação e acessórios para brincar de faz de conta e criar histórias divertidas e cheias de imaginação. </li>
        </ul>
        E o melhor: nossa seleção é constantemente atualizada! Trabalhamos com marcas que oferecem produtos de qualidade e segurança, para que seus filhos brinquem com tranquilidade e se divirtam ao máximo! <br><br>
        Fique de olho nas novidades! Estamos sempre trazendo brinquedos novos e acessíveis para garantir a diversão dos pequenos com qualidade e segurança.
    `;
}


    // Definir o título e descrição do modal
    document.getElementById('modal-title').innerHTML = title;
    document.getElementById('modal-description').innerHTML = description;

    // Exibir o modal
    document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}