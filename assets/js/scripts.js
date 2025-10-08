// Stick Header

window.addEventListener("scroll", function () {
	const header = document.querySelector(".header");
	const titleHeight = document.querySelector(".header").scrollHeight;

	if (window.scrollY > 150) {
		header.classList.add("header--sticky");
	} else {
		header.classList.remove("header--sticky");
	}
});

// (function () {
// 	// Popover
// 	$(function () {
// 		$('[data-toggle="popover"]').popover(options);
// 	});

// 	// Tooltip
// 	$(function () {
// 		$('[data-toggle="tooltip"]').tooltip(options);
// 	});
// })();

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// Botão de copiar podcast

const copyButton = document.querySelectorAll(".copy-to-clip");

copyButton.forEach((btn) => {
	btn.addEventListener("click", () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute("data-link");
	const textarea = document.createElement("textarea");
	textarea.setAttribute("readonly", "");
	textarea.style.position = "absolute";
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener("mouseout", () => {
		feedback.tooltip("hide");
	});
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll(".lightbox");

imageToLightbox.forEach((image) => {
	image.addEventListener("click", () => {
		if (!image.classList.contains("lightbox--show")) {
			const getImage = image.querySelector("img");
			const getImageSrc = getImage.getAttribute("src");
			const imageLightbox = document.createElement("div");

			imageLightbox.classList.add("lightbox__image");

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			console.log(getImageSrc);

			image.classList.add("lightbox--show");

			document.body.style.overflow = "hidden";
			document.body.style.userSelect = "none";

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector(".lightbox__image");
			e.addEventListener("click", () => {
				document.body.removeChild(e);
				image.classList.remove("lightbox--show");
				document.body.style.overflow = "auto";
				document.body.style.userSelect = "auto";
			});
		}
	});
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	const boxAttribute = box.getAttribute("data-box");

	const boxLabel = box.querySelector(".label");

	boxLabel.innerHTML = boxAttribute;
});

// Modal (teste)

const modalInfos = {
	creditos: {
		ariaLabel: "creditos",
		modalSize: "modal-lg",
		modalTitle: "Créditos",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Alexandre Padilha</p>
						<p class="small text-muted"><em>Ministro</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1">Marly Cruz</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora-geral</em></p>
						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora-adjunta</em></p>
						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Coordenadora de produção</em></p>
						<p class="mb-1">Juliana Dutra</p>
						<p class="small text-muted"><em>Gerente de produção</em></p>
						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de comunicação</em></p>
					
						<p class="mb-1">Fernanda Sousa</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>Designer de Interface e Interação</em></p>
						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>Designer de Interface e Front-end</em></p>
						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>Designer de Interface e Interação</em></p>
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>
						
						<p class="mb-1">Teo Venerando</p>
						<p class="small text-muted"><em>Edição audiovisual</em></p>
						
						<span class="h6 mb-3 d-block">Animação</span>

						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Motion designer</em></p>
						<p class="mb-1">Rose Renovato</p>
						<p class="small text-muted"><em>Locutora</em></p>
											
						<span class="h6 mb-3 d-block">Recursos Educacionais</span>
						
						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>
						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>
						<p class="mb-1">Janaina Vieira</p>
						<p class="small text-muted"><em>Revisão de Português</em></p>
						
						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>
						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>
						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>
						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>
						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>
					</div>

					<span class="h5 mb-3 d-block">Instituto Nacional de Infectologia - INI/FIOCRUZ</span>
					
					<div class="mb-5">
						<p class="mb-1">Estevão Portela Nunes</p>
						<p class="small text-muted"><em>Diretor</em></p>

						<span class="h6 mb-3 d-block">Coordenadora geral</span>
						
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="small text-muted"><em>Plataforma de Pesquisa Clínica INI/ Fiocruz</em></p>
						
						<span class="h6 mb-3 d-block">Coordenadores acadêmicos</span>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Tiago Filgueiras Porto </p>
						<p class="small text-muted"><em>Plataforma de Pesquisa Clínica INI/Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Conteudistas</span>

						<p class="small"><strong>Módulo 1 | Conceito, histórico e diretrizes</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="small text-muted"><em>ENSP/ Fiocruz</em></p>

						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>
						
						<p class=" small"><strong>Módulo 2 | Regulamentações e fluxos</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="small text-muted"><em>ENSP/ Fiocruz</em></p>

						<p class="mb-1">Marcella Feitosa da Silva Barboza</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>
						
						<p class="small"><strong>Moçambique</strong></p>
						
						<p class="mb-1">Alcina Zitha Tauancha</p>
						<p class="small text-muted"><em>Farmacêutica-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="mb-1">Anchelda Santinho Mulimela</p>
						<p class="small text-muted"><em>Revisão Linguistica-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>						
						
						<p class="mb-1">Igor Doby</p>
						<p class="small text-muted"><em>Médico-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>

						<p class="small"><strong>Módulo 3 | Atores em pesquisa clínica</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="small text-muted"><em>ENSP/ Fiocruz</em></p>

						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Ferão Américo Mandlate</p>
						<p class="small text-muted"><em>Psicólogo-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>

						<p class="mb-1">Jaciara Nissai Sallé Mussa</p>
						<p class="small text-muted"><em>Psicológa-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="mb-1">Yolanda Veronica Feliciano Manganhe</p>
						<p class="small text-muted"><em>Antropóloga-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="small"><strong>Módulo 4 | Segurança e Qualidade</strong></p>
						
						<p class="mb-1">Flavia Cristina Ferrão Lessa</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="small text-muted"><em>ENSP/ Fiocruz</em></p>

						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Avaliação Final</span>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="small text-muted"><em>ENSP/ Fiocruz</em></p>

						<p class="mb-1">Marcella Feitosa da Silva Barboza</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>

						<p class="mb-1">Tiago Filgueiras Porto </p>
						<p class="small text-muted"><em>INI/ Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Revisores Técnicos</span>
						
						<p class="mb-1">Estevão Portela Nunes</p>
						<p class="small text-muted"><em>Diretor do Instituto Nacional de Infectologia Evandro Chagas - INI/FIOCRUZ</em></p>
					</div>
					
					<div class="">
						<p class="mb-1"><strong>A inclusão do conteúdo referente à regulamentação de Moçambique é resultado de uma parceria no âmbito do Programa Coopbras (Programa de Cooperação em Ensino e Pesquisa Internacional), apoiada pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior/Brasil/CAPES (código de financiamento 001)</strong></p>
					</div>
				</div>
			</div>
		`,
	},
	bibliografia: {
		ariaLabel: "bibliografia",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>HOMEDES, N. ; UGALDE, A. (Org.) Ética y ensayos clínicos em America Latina. 1ª ed. Buenos Aires: Lugar Editorial. 2012. 420p. <span class="text-muted">ISBN: 978-950-892-419-3.</span></p>
						<p>OLIVEIRA, G. G. e colaboradores. Ensaios Clínicos: Princípios e Prática. 1ª ed. Brasília. Editora ANVISA. 2006. 328p.</p>
						<p>BARBOZA, M.F.S. Manual básico para realização de ensaios clínicos conduzidos por um “Investigador-Patrocinador”: abordagem dos procedimentos por gestão de processos. Dissertação (mestrado) – Farmanguinhos/FIOCRUZ, 2015. 173p. Disponível em: <a href="https://www.arca.fiocruz.br/bitstream/handle/icict/13163/6.pdf?sequence=1&isAllowed=y" target="_blank" rel="noopener noreferrer">https://www.arca.fiocruz.br/bitstream/handle/icict/13163/6.pdf?sequence=1&isAllowed=y</a>. Acesso em: 23 set. 2023.</p>
						<p>FREITAS, C. B. D. <em>et al.</em> Brasil: sistema de protección de los voluntários que participan en investigación. <em>In</em>: HOMEDES, N.;  UGALDE, A. (Org.). Ética y ensayos clínicos em América Latina. Buenos Aires: Lugar Editorial; 2012. p. 215-237.</p>
						<p>FRANCISCONI, C.F. <em>et al.</em> Comitês de Ética em Pesquisa: levantamento de 26 hospitais brasileiros. <strong>Revista Bioética</strong> v. 3, p. 61-67, 1995. Disponivel em: <a href="https://revistabioetica.cfm.org.br/revista_bioetica/article/view/431/499" target="_blank" rel="noopener noreferrer">https://revistabioetica.cfm.org.br/revista_bioetica/article/view/431/499</a>. Acesso em: 23 set. 2023.</p>
						<p>CLOTET, J. O consentimento informado nos Comitês de Ética em pesquisa e na prática médica: conceituação, origens e atualidade. <strong>Revista Bioética</strong>. v.3, n. 1, p. 51-9, 1995. Disponível em: <a href="https://revistabioetica.cfm.org.br/index.php/revista_bioetica/article/view/430" target="_blank" rel="noopener noreferrer">https://revistabioetica.cfm.org.br/index.php/revista_bioetica/article/view/430</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
						<span class="h5 mb-3 d-block">Documentos Internacionais</span>
						
						<p>ASSEMBLEIA MÉDICA MUNDIAL (FINLÂNDIA). Declaração de Helsinque, 1964. 5 p. Disponível em: <a href="https://www.fcm.unicamp.br/fcm/sites/default/files/declaracao_de_helsinque.pdf" target="_blank" rel="noopener noreferrer">https://www.fcm.unicamp.br/fcm/sites/default/files/declaracao_de_helsinque.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>TRIBUNAL MILITAR INTERNACIONAL (NURENBERG, ALEMANHA). Código de Nuremberg, 1947. Disponível em: <a href="https://www.ghc.com.br/files/CODIGO%20DE%20NEURENBERG.pdf" target="_blank" rel="noopener noreferrer">https://www.ghc.com.br/files/CODIGO%20DE%20NEURENBERG.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>BRASIL. Ministério da Saúde. Diretrizes Operacionais para Comités de Ética que Avaliam Protocolos de Pesquisa. Organização Mundial da Saúde, 2008. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_operacionais_biomedicas.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_operacionais_biomedicas.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>CONSELHO DAS ORGANIZAÇÕES INTERNACIONAIS DE CIÊNCIAS MÉDICAS ÉTICA. Diretrizes Internacionais de Ética para Pesquisa Médica envolvendo Seres Humanos. CIOMS. Disponível em: <a href="https://cioms.ch/wp-content/uploads/2018/11/CIOMS-final-Diretrizes-Eticas-Internacionais-Out18.pdf" target="_blank" rel="noopener noreferrer">https://cioms.ch/wp-content/uploads/2018/11/CIOMS-final-Diretrizes-Eticas-Internacionais-Out18.pdf</a>. Acesso em: 23 set. 2023.</p>
						<p>Código de Ética da Ciência e Tecnologia, Decreto n°71/2007, de 24 Dezembro de 2007-Moçambique. Disponível em: <a href="https://iset-oneworld.ac.mz/images/phocadownload/Biblioteca/ES/5.Decreto_71-2207_Codigo_Etica_CT.pdf" target="_blank" rel="noopener noreferrer">https://iset-oneworld.ac.mz/images/phocadownload/Biblioteca/ES/5.Decreto_71-2207_Codigo_Etica_CT.pdf</a>. Acesso em: 23 set. 2023.</p>

						<p>INTERNATIONAL COUNCIL FOR HARMONISATION OF TECHNICAL REQUIREMENTS FOR PHARMACEUTICALS FOR HUMAN USE – ICH. Good Clinical Practices (Harmonized Tripartite Guideline for Good Clinical Practice) E6(R3), 2025. Disponível em: <a href='https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf' target='_blank' rel="noopener noreferrer">https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf</a></p>
					</div>

					<div class="mb-5">
						<span class="h5 mb-3 d-block">Legislação</span>
						<p>BRASIL. Lei nº 14.874, de 28 de maio de 2024. Dispõe sobre a pesquisa com seres humanos e institui o Sistema Nacional de Ética em Pesquisa com Seres Humanos.  Disponível em: <a href='' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14874.htm</a>. Acesso em: 08 jul. 2025.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">Conselho Nacional de Saúde</span>

						<p>CONSELHO NACIONAL DE SAÚDE. Resolução CNS 466/2012. Diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos. Disponível em: <a href="https://conselho.saude.gov.br/resolucoes/2012/Reso466.pdf" target="_blank" rel="noopener noreferrer">https://conselho.saude.gov.br/resolucoes/2012/Reso466.pdf</a>. Acesso em: 23 set. 2023.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">ANVISA</span>

						<p>AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA. RDC Nº 9, DE 20 DE FEVEREIRO DE 2015.Dispõe sobre as diretrizes e os procedimentos para a realização de ensaios clínicos no país visando a posterior concessão de registro de medicamentos. Disponível em: <a href='' target='_blank'>https://www.in.gov.br/en/web/dou/-/resolucao-da-diretoria-colegiada-anvisa-n-945-de-29-de-novembro-de-2024-598832897</a>. Acesso em: 08 jul. 2025.</p>
					</div>
					
					<div class="mb-5">
					<span class="h5 mb-3 d-block">Regulamentações Correlatas</span>

						<p>BRASIL. Lei nº 9782, de 26 de janeiro de 1999. Define o Sistema Nacional de Vigilância Sanitária, cria a Agência Nacional de Vigilância Sanitária, e dá outras providências. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l9782.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l9782.htm</a>. Acesso em: 23 set. 2023.</p>

						<p>BRASIL. Lei nº 11.105, de 24 de março de 2005 (Lei de Biossegurança). Estabelece normas de segurança e mecanismos de fiscalização de atividades que envolvam organismos geneticamente modificados – OGM, além de permitir para fins de pesquisa e terapia, a utilização de células-tronco embrionárias obtidas de embriões humanos produzidos por fertilização in vitro e não utilizados no respectivo procedimento, sob condições específicas. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11105.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11105.htm</a>. Acesso em: 23 set. 2023.</p>
					</div>
				</div>
			</div>
		`,
	},
	glossario: {
		ariaLabel: "glossario",
		modalSize: "modal-lg",
		modalTitle: "Glossário",
		modalBody: `
			<!-- Campo de filtro com botão interno -->
			<div class="position-relative mb-3">
				<input type="text" id="glossarioFiltro" class="form-control pe-5" placeholder="Filtrar termos..." />
				<button type="button" id="btnClearFiltro" class="btn-clear-input d-none" aria-label="Limpar">✕</button>
			</div>
			<!-- Listas do glossário -->
            <!-- A -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">A</li>
				<li class="list-group-item">
					<span class="glossario-termo">Acesso Direto</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Permissão para examinar, analisar, verificar e reproduzir quaisquer registros e relatórios que sejam importantes para avaliar o estudo clínico. Qualquer parte (ex.: autoridades regulatórias nacionais e estrangeiras, auditores e monitores do patrocinador) com acesso direto deverá ter o devido cuidado, com as restrições estabelecidas pelas exigências regulatórias aplicáveis, para que se mantenha confidencialidade dos participantes de pesquisa e das informações de propriedade do patrocinador.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Adesão (em relação aos estudos)</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Seguir todas as exigências relativas ao estudo, às Boas Práticas Clínicas e às exigências regulatórias aplicáveis.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">ANVISA</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span> 
					<br />
					Agência Nacional de Vigilância Sanitária, autarquia que exerce atividades de regulação, normatização, controle e fiscalização na área de vigilância sanitária.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Aprovação (em relação às Instâncias Regulatórias)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					É a decisão afirmativa de que o estudo clínico foi analisado e pode ser conduzido, seguindo as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis, observando as recomendações específicas de cada uma destas instâncias.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Assentimento livre e esclarecido</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Anuência do participante da pesquisa - criança, adolescente ou indivíduos impedidos de forma temporária ou não de consentir, na medida de sua compreensão e respeitadas suas singularidades, após esclarecimento sobre a natureza da pesquisa, justificativa, objetivos, métodos, potenciais benefícios e riscos. A obtenção do assentimento não elimina a necessidade do consentimento do responsável.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Auditoria</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Verificação independente e sistemática das atividades e documentos relativos ao estudo, a fim de determinar se o protocolo, os procedimentos operacionais padrões do patrocinador (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis estão sendo cumpridas.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Autoridade Nacional Reguladora do Medicamento (ANARME) ou Entidade Reguladora de Moçambique</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Instituição pública, dotada de personalidade jurídica, autonomia administrativa, financeira e patrimonial, que desempenha funções de regulamentação, supervisão, fiscalização e sancionamento, nos termos definidos pela Lei.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Autoridades Regulatórias</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Instituições que têm poder regulatório, ou seja, autoridades que analisam os dados submetidos e conduzem inspeções. Podem também serem denominadas autoridades competentes.
				</li>
			</ul>

			<!-- B -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">B</li>
				<li class="list-group-item">
					<span class="glossario-termo">Bem-estar (dos participantes de pesquisa)</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Integridade física e mental dos indivíduos envolvidos em um estudo clínico.
				</li>
				<li class="list-group-item">
					<span class="glossario-termo">Boas Práticas Clínicas (BPC)</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Padrão de qualidade ética e científica para o planejamento, condução, registro e relato de estudos clínicos que envolvam a participação de seres humanos. O objetivo é assegurar a proteção dos direitos, integridade e confidencialidade dos participantes da pesquisa, assim como, a credibilidade dos dados e a precisão dos resultados.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Brochura do Investigador</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento que apresenta a compilação dos dados clínicos e não clínicos acerca dos produtos sob investigação, relevante para o estudo do(s) produto(s) sob investigação em seres humanos. No caso de medicamento já comercializado pode ser substituído pela Bula.
				</li>
			</ul>

			<!-- C -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">C</li>
				<li class="list-group-item">
					<span class="glossario-termo">Caráter Cego/Mascaramento</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Procedimento no qual uma ou mais partes envolvidas no estudo é mantida desinformada sobre as indicações do tratamento. O caráter cego geralmente refere-se aos participantes de pesquisa. Caso o estudo seja duplo-cego, significa que não somente o participante, mas os investigadores, monitores e, em alguns casos, os analistas de dados são mantidos desinformados quanto ao tratamento.
				</li>
				<li class="list-group-item">
					<span class="glossario-termo">Certificado de Auditoria</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Declaração de confirmação do auditor de que a auditoria foi realizada.
				</li>
				<li class="list-group-item">
					<span class="glossario-termo">Centro de Pesquisa</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Local onde, usualmente, as atividades ligadas ao estudo são conduzidas. Ensaios Clínicos podem ser conduzidos em um único centro ou em vários centros simultaneamente (Estudos Multicêntricos).
				</li>
				<li class="list-group-item">
					<span class="glossario-termo">Código de Identificação do Participante</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Código identificador exclusivo, designado pelo investigador (ou pelo patrocinador) para cada participante de pesquisa, com intuito de manter sua identidade em sigilo.
				</li>
				<li class="list-group-item">
					<span class="glossario-termo">Comitê de Coordenação</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Comitê organizado pelo patrocinador para coordenar a condução de um estudo multicêntrico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê de Ética em Pesquisa (CEP)</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Organização independente, multidisciplinar, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo, por meio da aprovação e revisão contínua do protocolo do estudo e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê de Ética Independente (IEC)</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Uma organização independente (um conselho de revisão ou um comitê institucional, regional, nacional ou supranacional) constituído por profissionais da área médica/científica e membros pertencentes a outras áreas, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo e assegurar publicamente a sua proteção, através da revisão e aprovação/parecer favorável sobre o protocolo do estudo, adequação dos investigadores, recursos e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa, entre outras atividades. A situação legal, composição, função, operação e exigências regulatórias pertinentes ao Comitê de Ética Independente podem ser diferentes em cada país, mas devem permitir que ele atue em consonância com o Guia das BPC (ICH).
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê Independente de Monitoramento de Dados (IDMC)</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Também conhecido como Conselho de Monitoramento de Dados e Segurança, Comitê de Monitoramento ou Comitê de Monitoramento de Dados. É um comitê independente de monitoramento de dados que, pode ser implementado pelo investigador, para avaliar periodicamente o desenvolvimento de um estudo clínico, os dados de segurança e os limites críticos de eficácia, além de recomendar ao patrocinador a continuidade, a modificação, ou o encerramento do estudo
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê Institucional de Bioética Para Saúde (CIBS)</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Entidade criada pelo Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique, com competências delegadas para avaliação de aspectos éticos de propostas de investigação em saúde a nível de uma ou mais instituições, e que apenas efetua avaliação de protocolos de investigação provenientes ou realizados em colaboração com as respectivas instituições.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Órgão independente multidisciplinar, que faz avaliação dos protocolos de investigação na área da saúde para aferir a aplicação dos princípios éticos na realização da pesquisa tendo em conta a proteção dos participantes. Assegura a proteção dos direitos, segurança e bem-estar dos participantes nos estudos. Faz também a tutela e monitoria da atividade dos Comités Institucionais de Bioética para a Saúde (CIBS). O CNBS e os CIBS avaliam os aspectos metodológicos de protocolos de investigação quando os Comitês Científicos das instituições proponentes de protocolos não estiverem em funcionamento, e sempre que houver aspectos metodológicos que impactem a Bioética.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comparador (Produto)</span> <span class="badge seguranca rounded-pill text-bg-primary">Segurança</span> <br/>
					Um produto sob investigação ou comercializado ou placebo, usado como referência em um estudo clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Confidencialidade</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Prevenir a divulgação para outros, que não os indivíduos autorizados, sobre a identidade de um participante de pesquisa ou de uma informação de propriedade do patrocinador.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Consentimento Livre e Esclarecido</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Processo através do qual um participante confirma voluntariamente sua intenção de participar em um ensaio em particular, após ter sido informado de todos os aspectos do ensaio que forem relevantes para a decisão do participante de entrar no estudo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Contrato</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Formato de documento que apresenta o acordo por escrito, datado e assinado entre duas ou mais partes envolvidas que estabeleça quaisquer determinações de delegação e distribuição de tarefas e obrigações e, se apropriado, sobre assuntos financeiros. O protocolo pode servir de base para o contrato.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Controle de Qualidade</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Técnicas e atividades operacionais adotadas dentro do sistema de garantia de qualidade para assegurar que todas as exigências de qualidade relacionadas às atividades do estudo sejam atendidas.
				</li>
			</ul>

			<!-- D -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">D</li>
				<li class="list-group-item">
					<span class="glossario-termo">Dados Fonte</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Todas as informações dos registros originais, sendo cópias autenticadas de registros originais de achados clínicos, observações ou ainda outras atividades de uma pesquisa clínica necessárias para a reconstrução e avaliação do estudo. Os dados fonte estão contidos nos documentos fonte (registros originais ou cópias autenticadas).
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Desvio de Protocolo</span> <span class="badge seguranca rounded-pill text-bg-primary">Segurança</span><br />
					Qualquer não cumprimento dos procedimentos ou requisitos definidos na versão aprovada do protocolo, sem implicações maiores na integridade do ensaio, na qualidade dos dados ou nos direitos e segurança dos participantes.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Documentação</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Todos os registros, sob qualquer forma (incluindo dados escritos, eletrônicos, magnéticos e ópticos, eletrocardiogramas, raios-X e demais exames de imagem, entre outros), que descrevem ou registram os métodos, condutas e/ou resultados de um estudo, os fatores que o afetaram e as ações realizadas.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Documentos Essenciais</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documentos que, individual ou coletivamente, permitem a avaliação da condução ética e da qualidade dos dados produzidos por um estudo clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Documentos Fonte</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documentos, dados e registros originais (ex.: registros hospitalares, tabelas clínicas e administrativas, anotações laboratoriais, memorandos, diários de paciente ou checklists de avaliação, registros de prescrição farmacêutica, dados registrados por documentos automatizados, cópias ou transcrições autenticadas após verificação de sua precisão, microficha, negativos fotográficos, microfilmes ou registros magnéticos, raios-X, arquivos de pacientes e registros arquivados na farmácia, nos laboratórios e nos departamentos envolvidos no estudo clínico).
				</li>
			</ul>

			<!-- E -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">E</li>
				<li class="list-group-item">
					<span class="glossario-termo">Emenda ao Protocolo</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento que descreve as alterações ou esclarecimentos formais feitos ao protocolo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Estudo Clínico</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Qualquer investigação em seres humanos que pretenda descobrir ou verificar os efeitos clínicos, farmacêuticos e/ou outros efeitos farmacodinâmicos de um produto sob investigação; e/ou identificar quaisquer reações adversas a um produto sob investigação; e/ou estudar a absorção, distribuição, metabolismo e excreção de um produto sob investigação com o objetivo de apurar sua segurança e/ou eficácia.
				</li>

					<li class="list-group-item">
					<span class="glossario-termo">Evento Adverso (EA)</span> <span class="badge seguranca rounded-pill text-bg-primary">Segurança</span><br />
					Qualquer ocorrência médica inconveniente ou sinal desfavorável ou não planejado (incluindo achados laboratoriais anormais), sintoma, ou doença temporariamente associada com o uso de um produto farmacêutico sob investigação, relacionadas ou não ao produto farmacêutico sob investigação, e que não, necessariamente, tenha uma relação causal com o tratamento.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)</span> <span class="badge seguranca rounded-pill text-bg-primary">Segurança</span><br />
					Qualquer ocorrência médica adversa que, em qualquer dose: - resulte em morte, - represente risco à vida, - implique em hospitalização ou prolongamento de uma hospitalização existente, - resulte em persistente inabilidade/incapacidade significativa, ou - cause anomalia congênita.
				</li>	

				<li class="list-group-item">
					<span class="glossario-termo">Exigências Regulatórias Aplicáveis</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Quaisquer leis ou regulamentos sobre a condução de estudos que envolvem seres humanos, com produtos sob investigação ou não.
				</li>
			</ul>

			<!-- F -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">F</li>
				<li class="list-group-item">
					<span class="glossario-termo">Farmacocinética</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Em geral, são todas as modificações que um sistema biológico produz em um princípio ativo. É o estudo da cinética (relação quantitativa entre a variável independente tempo e a variável dependente concentração) dos processos de absorção, distribuição, biotransformação e excreção dos medicamentos (princípios ativos e/ou seus metabolitos).
				</li>
				<li class="list-group-item">
					<span class="glossario-termo">Farmacodinâmica</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Modificações que um princípio ativo produz em um sistema biológico, ou seja, é o estudo dos efeitos bioquímicos e fisiológicos dos medicamentos e seus mecanismos de ação.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Ficha Clínica (Case Report Form - CRF)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento impresso, óptico ou eletrônico elaborado para registrar todas as informações exigidas pelo protocolo a serem relatadas ao patrocinador sobre cada participante de pesquisa.
				</li>
			</ul>

			<!-- G -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">G</li>
				<li class="list-group-item">
					<span class="glossario-termo">Garantia de Qualidade</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Todas as ações planejadas e sistemáticas realizadas para garantir que o estudo seja desenvolvido e os dados sejam gerados, documentados, relatados e arquivados conforme as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.
				</li>
					
			</ul>

			<!-- H -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">H</li>
				<li class="list-group-item">
					<span class="glossario-termo">H</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- I -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">I</li>
				<li class="list-group-item">
					<span class="glossario-termo">Inspeção</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Atividade de uma autoridade regulatória a fim de avaliar documentos, instalações, registros e quaisquer outros recursos que se considerem relacionados ao estudo clínico, os quais podem estar localizados na instituição onde está sendo conduzido o estudo, nas dependências do patrocinador e/ou nas organizações de pesquisa contratadas (CRO), ou em outros estabelecimentos tidos como apropriados pelas autoridades regulatórias.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Instituição</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Qualquer entidade, agência ou instalação médica ou odontológica onde sejam conduzidos estudos clínicos.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Investigador de Coordenação</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Um investigador responsável pela coordenação de investigadores de diferentes centros participantes de um estudo multicêntrico.
				</li>

				<li class="list-group-item">
				<span class="glossario-termo">Investigador/Investigador Principal/Pesquisador</span> 
				<span class="badge atores rounded-pill text-bg-primary">Atores</span>
				<br />
					Pessoa responsável por conduzir o estudo clínico em um centro de pesquisa. Pesquisador responsável ou Investigador Principal é o responsável legal pelo estudo, líder da equipe do estudo. Um médico qualificado (ou dentista, conforme o caso), que for um investigador ou um subinvestigador do ensaio, deve ser responsável por todas as decisões médicas (ou odontológicas) relacionadas ao ensaio.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Investigador/ Instituição</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Expressão que significa “o investigador e/ou instituição”, quando e onde solicitada pelas exigências regulatórias aplicáveis.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Investigador-Patrocinador</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
				<br />
					Indivíduo que implementa e conduz, sozinho ou em grupo, um estudo clínico e sob cuja imediata direção o produto sob investigação é administrado, fornecido ou utilizado por um paciente. O termo não inclui qualquer pessoa que não um indivíduo (ex.: não inclui uma corporação ou uma agência). As responsabilidades de um investigador-patrocinador incluem tanto as do patrocinador como as do investigador.
				</li>
			</ul>

			<!-- J -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">J</li>
				<li class="list-group-item">
					<span class="glossario-termo">J</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- K -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">K</li>
				<li class="list-group-item">
					<span class="glossario-termo">K</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- L -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">L</li>
				<li class="list-group-item">
					<span class="glossario-termo">L</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- M -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">M</li>
				<li class="list-group-item">
					<span class="glossario-termo">Monitoria</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Atividade de acompanhamento do progresso de um estudo clínico, garantindo que sua condução, registros e relatos sejam realizados de acordo com o protocolo, os Procedimentos Operacionais Padrão (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.
				</li>
			</ul>

			<!-- N -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">N</li>
				<li class="list-group-item">
					<span class="glossario-termo">N</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- O -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">O</li>

					<li class="list-group-item">
					<span class="glossario-termo">Organização de Pesquisa Contratada (CRO)</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Uma pessoa ou organização (comercial, acadêmica ou outra) contratada pelo patrocinador para realizar um ou mais de seus deveres e funções relativos a estudos clínicos.
				</li>
			</ul>

			<!-- P -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">P</li>

				<li class="list-group-item">
					<span class="glossario-termo">Parecer</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento que emite o resultado da análise em relação ao estudo submetido ao Comitê de Ética em Pesquisa (CEP).
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Participante de Pesquisa</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Pela regulamentação brasileira, indivíduo que, de forma esclarecida e voluntária, ou sob o esclarecimento e autorização de seu(s) responsável(eis) legal(ais), aceita ser pesquisado. Podem pertencer ao grupo dos que recebem o produto sob investigação ou ao grupo de controle. Além disso, podem ser portadores de alguma comorbidade/patologia ou indivíduos saudáveis.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Patrocinador</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Pessoa física ou jurídica, pública ou privada que apoia a pesquisa de variadas formas, seja com financiamento, infraestrutura, recursos humanos ou apoio institucional.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Placebo</span> <span class="badge seguranca rounded-pill text-bg-primary">Segurança</span><br />
					Formulação sem efeito farmacológico, administrada ao participante do ensaio clínico com a finalidade de mascaramento ou de ser comparador.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Populações Vulneráveis</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Indivíduos cuja vontade de participar do estudo possa ser indevidamente influenciada pela expectativa, justificada ou não, de benefícios associados à participação, ou de uma reação negativa, em caso de recusa, por parte de membros seniores de alguma hierarquia da qual façam parte ou à qual estejam submetidos. Exemplos são indivíduos pertencentes a grupos com uma estrutura hierárquica constituída, como estudantes de medicina, farmácia, odontologia e enfermagem, funcionários de hospitais e laboratórios, da indústria farmacêutica, membros das forças armadas e detentos. Outros participantes de pesquisa vulneráveis são aqueles portadores de doenças incuráveis ou que estejam em casas de repouso, pessoas desempregadas ou miseráveis, pacientes em situações de emergência, grupos étnicos minoritários, pessoas sem moradia, nômades, refugiados, menores e aqueles incapazes de atestar o próprio consentimento.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Procedimentos Operacionais Padrão (POP)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Instruções escritas e detalhadas para a uniformidade de desempenho de uma determinada função.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Produto Investigacional (ou produto experimental)</span> <span class="badge seguranca rounded-pill text-bg-primary">Segurança</span><br />
					Forma farmacêutica de um ingrediente ativo ou placebo que está sendo provada ou usada como referência em um estudo clínico (Ensaio Clínico). Incluindo produto com autorização prévia de comercialização, mas utilizado ou formulado ou empacotado de maneira diferente daquela aprovada.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Produto sob investigação</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Forma de apresentação farmacêutica de um princípio ativo ou placebo sendo testado ou usado como referência em um estudo clínico, incluindo um produto com autorização comercial / de comercialização quando usado ou apresentado (formulado ou embalado) sob uma forma diferente da aprovada, ou usado para uma indicação não aprovada, ou quando usado para obter maiores informações sobre a forma aprovada.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Protocolo</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento que descreve toda a base do estudo, contendo justificativa, objetivos, desenho, metodologia, considerações estatísticas e organização do estudo. No entanto, estas informações podem ser fornecidas, de forma mais detalhada, por outros documentos referenciados pelo protocolo. Considera-se o termo protocolo o documento em si e às emendas ao protocolo.
				</li>
			</ul>

			<!-- Q -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">Q</li>
				<li class="list-group-item">
					<span class="glossario-termo">Q</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- R -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">R</li>
				<li class="list-group-item">
					<span class="glossario-termo">Randomização</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Processo de designação aleatória dos participantes de pesquisa ao tratamento ou ao grupo-controle, de forma a reduzir parcialidades.
				</li>
					<li class="list-group-item">
						<span class="glossario-termo">Reação Adversa ao medicamento (RAM)</span>
						<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
						<br />
						Qualquer resposta prejudicial ou indesejável, não intencional, a um medicamento, que ocorre nas doses usualmente empregadas para profilaxia, diagnóstico ou terapia de doenças. No conceito de RAM pode-se observar a existência de uma relação causal entre o uso do medicamento e a ocorrência do evento.
					</li>

					<li class="list-group-item">
						<span class="glossario-termo">Reação Adversa Inesperada ao medicamento</span>
						<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
						<br />
						Uma reação adversa, cuja natureza ou severidade não seja condizente com as informações aplicáveis ao produto (ex.: Brochura do Investigador para produtos sob investigação não aprovados ou bula/resumo das características do produto para os aprovados).
					</li>

					<li class="list-group-item">
						<span class="glossario-termo">Relatório de Auditoria</span>
						<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
						<br />
						Avaliação por escrito realizada pelo auditor do patrocinador sobre os resultados e impressões da auditoria.
					</li>

					<li class="list-group-item">
						<span class="glossario-termo">Relatório de Estudo Clínico</span>
						<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
						<br />
						Descrição por escrito do ensaio/estudo de qualquer agente terapêutico, profilático ou de diagnóstico conduzido em seres humanos, no qual as descrições clínicas e estatísticas, apresentações e análises estão plenamente integradas em um único relatório.
					</li>

					<li class="list-group-item">
						<span class="glossario-termo">Relatório Interino do Estudo Clínico</span>
						<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
						<br />
						Relatório contendo os resultados intermediários e sua avaliação baseada em análises realizadas no decorrer de um estudo.
					</li>

					<li class="list-group-item">
						<span class="glossario-termo">Relatório de Monitoria</span>
						<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
						<br />
						Relatório que descreve os achados e as impressões do monitor para o patrocinador, após cada visita de monitoria do estudo e/ou outros comunicados relacionados, de acordo com os POP do patrocinador.
					</li>
					
					<li class="list-group-item">
					<span class="glossario-termo">Representante legal</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Pessoa física ou jurídica autorizada pela legislação aplicável para consentir, em nome do participante de pesquisa, sua participação em um estudo clínico.
				</li>
			</ul>

			<!-- S -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">S</li>
					<li class="list-group-item">
					<span class="glossario-termo">Sub Investigador</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Qualquer membro específico da equipe do estudo clínico, designado e supervisionado pelo investigador no centro de pesquisa para conduzir procedimentos essenciais e/ou tomar decisões importantes relacionadas ao estudo.
				</li>
			</ul>

			<!-- T -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">T</li>
					<li class="list-group-item">
					<span class="glossario-termo">Testemunha Imparcial</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Pessoa, não relacionada ao estudo, não sendo injustamente influenciada pelas pessoas nele envolvidas, que participe do processo de consentimento, inclusive registrando participação assinando o Termo de Consentimento Livre e Esclarecido (TCLE), caso o participante de pesquisa, ou seu responsável legal, não saiba ler e/ou escrever, garantindo assim que as informações redigidas destinadas aos participantes sejam as mesmas informadas verbalmente.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Trilha de Auditoria</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documentação que permite a reconstrução do curso dos eventos e /ou achados.
				</li>
			</ul>

			<!-- U -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">U</li>
				<li class="list-group-item">
					<span class="glossario-termo">U</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- V -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">V</li>
				<li class="list-group-item">
					<span class="glossario-termo">Violação de protocolo de ensaio clínico</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Desvio de protocolo de ensaio clínico que possa afetar a qualidade dos dados, que comprometa a integridade do estudo ou que possa afetar a segurança ou os direitos dos participantes do ensaio clínico.
				</li>
			</ul>

			<!-- W -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">WU</li>
				<li class="list-group-item">
					<span class="glossario-termo">W</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- X -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">X</li>
				<li class="list-group-item">
					<span class="glossario-termo">X</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- Y -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">Y</li>
				<li class="list-group-item">
					<span class="glossario-termo">Y</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>

			<!-- Z -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">Z</li>
				<li class="list-group-item">
					<span class="glossario-termo">Z</span>
					<br />
					Não há palavras com esta letra no glossário.
				</li>	
			</ul>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener("DOMContentLoaded", function (event) {
	//do work

	modalButtons.forEach((btn) => {
		// Check if the modal exist
		const modalId = btn.getAttribute("data-bs-target").slice(1);

		const createdModalId = document.getElementById(modalId);

		if (!createdModalId) {
			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement("div");
	const modalLabel = id.slice(6);

	newModal.classList.add("modal", "fade");
	newModal.setAttribute("id", id);
	newModal.setAttribute("tabindex", "-1");
	newModal.setAttribute("aria-labelledby", modalLabel);
	newModal.setAttribute("aria-hidden", "true");

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}

// Filtro do glossário

document.addEventListener("DOMContentLoaded", () => {
	const filtroInput = document.getElementById("glossarioFiltro");
	const btnClear = document.getElementById("btnClearFiltro");
	const glossarioModal = document.getElementById("modal-glossario");

	// ⚙️ CONFIGURAÇÕES — edite conforme precisar
	const ROLAR_ATE_RESULTADO = false; // rola até o primeiro resultado visível (troque para true se quiser)
	const BUSCAR_NO_INICIO = true; // true = busca só termos que comecem com o texto digitado

	function aplicarFiltro() {
		const filtro = filtroInput.value.toLowerCase();
		const listas = document.querySelectorAll("#modal-glossario ul.lista-glossario");
		let primeiroResultado = null;

		// mostra/esconde botão X
		btnClear.classList.toggle("d-none", filtro === "");

		listas.forEach((ul) => {
			const titulo = ul.querySelector("li.active");
			const itens = ul.querySelectorAll("li:not(.active)");
			let temResultadoNoGrupo = false;

			itens.forEach((li) => {
				const termoSpan = li.querySelector(".glossario-termo");
				const termoOriginal = termoSpan.textContent;
				const termoLower = termoOriginal.toLowerCase();

				// remove highlight anterior
				termoSpan.innerHTML = termoOriginal;

				if (filtro === "") {
					li.style.display = "";
					temResultadoNoGrupo = true;
					return;
				}

				// --- lógica de busca ---
				let index;
				if (BUSCAR_NO_INICIO) {
					index = termoLower.startsWith(filtro) ? 0 : -1;
				} else {
					index = termoLower.indexOf(filtro);
				}

				if (index !== -1) {
					li.style.display = "";
					const antes = termoOriginal.substring(0, index);
					const match = termoOriginal.substring(index, index + filtro.length);
					const depois = termoOriginal.substring(index + filtro.length);
					termoSpan.innerHTML = `${antes}<span class="highlight">${match}</span>${depois}`;
					temResultadoNoGrupo = true;
					if (!primeiroResultado) primeiroResultado = li;
				} else {
					li.style.display = "none";
				}
			});

			titulo.style.display = temResultadoNoGrupo ? "" : "none";
		});

		// --- rolagem opcional ---
		if (ROLAR_ATE_RESULTADO && primeiroResultado) {
			primeiroResultado.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	}

	// eventos
	filtroInput.addEventListener("input", aplicarFiltro);
	btnClear.addEventListener("click", () => {
		filtroInput.value = "";
		aplicarFiltro();
		filtroInput.focus();
	});
	glossarioModal.addEventListener("hidden.bs.modal", () => {
		filtroInput.value = "";
		aplicarFiltro();
	});
});
