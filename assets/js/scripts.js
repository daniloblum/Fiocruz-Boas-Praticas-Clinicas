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
					<span class="glossario-termo">Acordo</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
				Um documento ou conjunto de documentos que descreve os detalhes de quaisquer acordos sobre delegação ou transferência, distribuição e/ou compartilhamento de atividades e, se aplicável, sobre questões financeiras entre duas ou mais partes. Isso pode ser na forma de um contrato. O protocolo pode servir como base para um acordo. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">ANVISA</span>
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Agência Nacional de Vigilância Sanitária, autarquia que exerce atividades de regulação, normatização, controle e fiscalização na área de vigilância sanitária.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Aprovação (em relação às instâncias regulatórias)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					É a decisão afirmativa de que o estudo clínico foi analisado e pode ser conduzido, seguindo as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis, observando as recomendações específicas de cada uma destas instâncias.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Assentimento</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Anuência da criança, do adolescente ou do indivíduo legalmente incapaz em participar voluntariamente da pesquisa, após ter sido informado e esclarecido sobre todos os aspectos relevantes de sua participação, na medida da sua capacidade de compreensão e de acordo com suas singularidades, sem prejuízo do necessário consentimento dos responsáveis legais.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Assinatura</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Uma marca, símbolo ou inscrição única executada, adotada ou autorizada por um indivíduo, de acordo com os requisitos e/ou práticas regulatórias aplicáveis para demonstrar a expressão de vontade e permitir a autenticação do signatário (ou seja, estabelecer um alto grau de certeza de que um registro foi assinado pelo signatário alegado). Uma assinatura pode ser física ou eletrônica.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Auditoria</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Um exame sistemático e independente das atividades e registros relacionados ao ensaio clínico, realizado pelo patrocinador, prestador de serviços (incluindo organização de pesquisa contratada (CRO)) ou instituição para determinar se as atividades relacionadas ao ensaio clínico avaliadas foram conduzidas e se os dados foram registrados, analisados e relatados com precisão, de acordo com o protocolo, os procedimentos operacionais padrão (POPs) aplicáveis, as Boas Práticas Clínicas (BPC) e os requisitos regulatórios aplicáveis.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Autoridade Nacional Reguladora do Medicamento (ANARME) ou Entidade Reguladora de Moçambique</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Instituição pública, dotada de personalidade jurídica, autonomia administrativa, financeira e patrimonial, que desempenha funções de regulamentação, supervisão e fiscalização das atividades relacionadas aos ensaios clínicos de produtos farmacêuticos, vacinas e produtos biológicos nos termos definidos pela Lei, sob tutela do Ministro que superintende a área de saúde.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Autoridade Reguladora Estrangeira Equivalente (AREE)</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Autoridade reguladora estrangeira ou entidade internacional que possua práticas regulatórias alinhadas às da Anvisa, e que poderá ser considerada pela Anvisa em prática de confiança regulatória (Reliance). 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Autoridades Regulatórias</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Instituições que têm poder regulatório, ou seja, autoridades que analisam os dados submetidos e conduzem inspeções. Podem também serem denominadas autoridades competentes.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Autoridade sanitária</span> <span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Entidade que detém a competência para regulamentar, controlar e fiscalizar produtos e serviços que envolvam risco à saúde pública.
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
					<span class="glossario-termo">Biobanco</span>
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Coleção organizada, sem fins comerciais, de material biológico humano e de informações associadas, coletados e armazenados para fins de pesquisa, conforme regulamento ou normas técnicas, éticas e operacionais predefinidas, sob responsabilidade e gerenciamento de instituição pública ou privada. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Biorrepositório</span>
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Coleção organizada, sem fins comerciais, de material biológico humano e de informações associadas, coletados e armazenados para fins de projeto de pesquisa específico, conforme regulamento ou normas técnicas, éticas e operacionais predefinidas, sob responsabilidade de instituição pública ou privada e gerenciamento do pesquisador.  
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Boas Práticas Clínicas (BPC)</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Um padrão para o planejamento, início, execução, registro, supervisão, avaliação, análise e relato de estudos clínicos que garante que os dados e os resultados relatados sejam confiáveis e que os direitos, a segurança e o bem-estar dos participantes de pesquisa sejam protegidos.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Boas Práticas de Fabricação (BPF)</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Parte da Garantia da Qualidade que assegura que os produtos são consistentemente produzidos e controlados, com padrões de qualidade apropriados para o uso pretendido. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Boas Práticas de Laboratório (BPL)</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Sistema de qualidade que abrange o processo organizacional e as condições nas quais estudos não clínicos relacionados à saúde e à segurança ao meio ambiente são planejados, desenvolvidos, monitorados, registrados, arquivados e relatados. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Brochura do Investigador (BI)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento que apresenta um compilado de dados clínicos e não clínicos relativos aos medicamentos experimentais, relevantes para o estudo desses medicamentos e para o acompanhamento clínico dos participantes durante a condução da pesquisa. No caso de medicamento já comercializado, pode ser substituída pela Bula.
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
					<span class="glossario-termo">Categoria de ensaios clínicos de baixo risco</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Ensaios clínicos (fase 3) com medicamentos ou terapias com perfil de segurança conhecido, que representam um risco adicional mínimo para a segurança dos participantes do ensaio clínico, em comparação com a prática médica usual.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Categoria de ensaios clínicos de elevado risco</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Ensaios clínicos envolvendo medicamentos ou terapias novas, representando um risco elevado para a segurança dos participantes do ensaio clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Categoria de ensaios clínicos de moderado risco</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Ensaios clínicos envolvendo medicamentos ou terapias com perfil de segurança conhecido, ou que possuam DDCM aprovado com modificações substanciais, representando um risco adicional médio para a segurança dos participantes do ensaio clínico em comparação com a prática médica usual.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Categoria de risco de ensaios clínicos</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Estratificação de ensaios clínicos com riscos potenciais semelhantes, com base na experiência de uso e nível de informações de segurança disponíveis do medicamento experimental, permitindo diferenciar os ensaios clínicos como sendo de baixo, moderado e elevado risco.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Centro de ensaios clínicos </span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Organização pública ou privada, legitimamente constituída, devidamente cadastrada no Cadastro Nacional de Estabelecimentos de Saúde (CNES), em que são realizados ensaios clínicos.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Centro de pesquisa</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Local onde, usualmente, as atividades ligadas ao estudo são conduzidas. Ensaios Clínicos podem ser conduzidos em um único centro ou em vários centros simultaneamente (Estudos Multicêntricos).
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Certificado de auditoria</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Declaração de confirmação do auditor de que a auditoria foi realizada.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Código de identificação do participante </span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Código identificador exclusivo, designado pelo investigador (ou pelo patrocinador) para cada participante de pesquisa, com intuito de manter sua identidade em sigilo. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comissão Técnica Nacional de Biossegurança (CTNBio)</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Integrante do Ministério da Ciência e Tecnologia e Inovação (MCTI), é instância colegiada multidisciplinar de caráter consultivo e deliberativo, para prestar apoio técnico e de assessoramento ao Governo Federal na formulação, atualização e implementação da Política Nacional de Biossegurança (PNB) de OGM e seus derivados, bem como no estabelecimento de normas técnicas de segurança e de pareceres técnicos referentes à autorização para atividades que envolvam pesquisa e uso comercial de OGM e seus derivados, com base na avaliação de seu risco zoofitossanitário, à saúde humana e ao meio ambiente.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê de Ética em Pesquisa (CEP)</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Colegiado vinculado à instituição que realiza a pesquisa, de natureza pública ou privada, de composição interdisciplinar, constituído de membros das áreas médica, científica e não científica, de caráter consultivo e deliberativo, que atua de forma independente e autônoma, para assegurar a proteção dos direitos, da segurança e do bem-estar dos participantes da pesquisa, antes e no decorrer da pesquisa, mediante análise, revisão e aprovação ética dos protocolos de pesquisa e de suas emendas, bem como dos métodos e materiais a serem usados para obter e documentar o consentimento livre e esclarecido dos participantes da pesquisa
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê de ética em pesquisa acreditado</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					CEP que, além de ter sido credenciado, tenha sido acreditado pela instância nacional de ética em pesquisa para análise das pesquisas de risco elevado, podendo ainda realizar análise das pesquisas de risco baixo e moderado.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê de ética em pesquisa credenciado</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					CEP que tenha sido credenciado pela instância nacional de ética em pesquisa para análise das pesquisas de riscos baixo e moderado.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê Independente de Monitoramento de Dados e de Segurança (CMDS) (<em>Independent Data Monitoring Committee - IDMC ou Data and Safety Monitoring Board</em> - DSMB) </span> <span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Também conhecido como Conselho de Monitoramento de Dados e Segurança, Comitê de Monitoramento ou Comitê de Monitoramento de Dados. É um comitê independente de monitoramento de dados que pode ser implementado pelo patrocinador para avaliar periodicamente o desenvolvimento de um estudo clínico, os dados de segurança e os limites críticos de eficácia, além de recomendar ao patrocinador a continuidade, a modificação, ou o encerramento do estudo. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê Institucional de Bioética Para Saúde (CIBS)</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Entidade acreditada pelo Comité Nacional de Bioética em Saúde (CNBS) de Moçambique, com competências para avaliação isenta, independente e competente de salvaguardas bioéticas das propostas de investigação em saúde humana.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Entidade responsável pela aprovação, monitoria, salvaguarda e aplicação dos princípios da bioética, na Investigação em Saúde Humana no território nacional, dotada de independência técnica e científica, autonomia administrativa e financeira, sob tutela do Ministro que superintende a área de Saúde. Assegura a proteção dos direitos, segurança e bem-estar dos participantes nos estudos. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">CONEP</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span><br />
					Comissão Nacional de Ética em Pesquisa, é uma instância colegiada, de natureza consultiva, deliberativa, normativa, educativa e independente, vinculada ao Conselho Nacional de Saúde/MS.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Confidencialidade</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Prevenir a divulgação para outros, que não os indivíduos autorizados, sobre a identidade de um participante de pesquisa ou de uma informação de propriedade do patrocinador. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Conformidade (em relação aos estudos)</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Adesão aos requisitos relacionados ao ensaio clínico, aos requisitos de BPC e aos requisitos regulatórios aplicáveis. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Consentimento livre e esclarecido</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Um processo pelo qual um participante ou seu representante legal confirma voluntariamente sua disposição em participar de um estudo após ter sido informado e ter tido a oportunidade de discutir todos os aspectos do estudo relevantes para tomada de decisão sobre a sua participação. Diversas abordagens para o fornecimento de informações e a discussão sobre o estudo podem ser utilizadas. Isso pode incluir, por exemplo, o fornecimento de texto em diferentes formatos, imagens e vídeos e o uso de telefone ou videoconferência com a equipe do centro de pesquisa. O consentimento informado é documentado por meio de um Termo de Consentimento Livre e Esclarecido (em papel ou eletrônico), assinado e datado. A obtenção remota do consentimento pode ser considerada, quando apropriado.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Contrato de pesquisa</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Acordo escrito, datado e assinado entre 2 (duas) ou mais partes envolvidas, que define quaisquer disposições relativas à delegação e à distribuição de tarefas e às obrigações sobre a condução da pesquisa e, quando for o caso, aos aspectos financeiros, facultada a utilização do protocolo como base para o acordo. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Controle de qualidade</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Técnicas e atividades operacionais adotadas dentro do sistema de garantia de qualidade para assegurar que todas as exigências de qualidade relacionadas às atividades do estudo sejam atendidas. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Cópia certificada</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Uma cópia (independentemente do tipo de mídia utilizada) do registro original que foi verificada (ou seja, por uma assinatura datada ou por geração por meio de um processo validado) para conter as mesmas informações do original, incluindo metadados relevantes, quando aplicável.
				</li>
			</ul>

			<!-- D -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">D</li>
				<li class="list-group-item">
					<span class="glossario-termo">Dados-fonte</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Informações sobre resultados clínicos, observações ou atividades contidas nos registros originais e nas cópias autenticadas de registros originais de um estudo, necessárias para a sua reconstrução e avaliação.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Data de início do ensaio clínico</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					O primeiro ato de recrutamento de um potencial participante para um ensaio clínico específico, salvo definição diferente constante do protocolo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Data de início do ensaio clínico no Brasil</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					O primeiro ato de recrutamento no Brasil de um potencial participante para um ensaio clínico específico, salvo definição diferente constante do protocolo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Data de término do ensaio clínico</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Corresponde à data da última visita do último participante de ensaio clínico no Brasil ou outra definição do patrocinador, determinada expressamente, no protocolo específico de ensaio clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Derivado de Organismos Geneticamente Modificados (OGM)</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Produto obtido de OGM e que não possua capacidade autônoma de replicação ou que não contenha forma viável de OGM.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Desvio de protocolo</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Qualquer não cumprimento dos procedimentos ou requisitos definidos na versão aprovada do protocolo, sem implicações maiores na integridade do estudo, na qualidade dos dados ou nos direitos e segurança dos participantes.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Dispositivo médico</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Qualquer instrumento, aparelho, equipamento, implante, dispositivo para diagnóstico in vitro, software, material ou outro artigo, destinado pelo fabricante a ser usado, isolada ou conjuntamente, em seres humanos, para algum dos seguintes propósitos médicos:

					<div class="list">
						<ul class="list-group">
							<li class="list-group-item" list-style="none">a) diagnóstico, prevenção, monitoramento, tratamento, atenuação ou alívio de uma doença; </li>

							<li class="list-group-item" list-style="none">b) diagnóstico, monitoramento, tratamento ou reparação de uma lesão ou deficiência;</li>

							<li class="list-group-item" list-style="none">c) investigação, substituição, alteração da anatomia ou de um estado ou processo fisiológico ou patológico;</li>

							<li class="list-group-item" list-style="none">d) suporte ou sustentação à vida;</li>

							<li class="list-group-item" list-style="none">e) controle ou apoio à concepção;</li>

							<li class="list-group-item" list-style="none">f) fornecimento de informações por meio de exame in vitro de amostras provenientes do corpo humano, incluindo doações de órgãos e tecidos;</li>

							<li class="list-group-item" list-style="none">g) exercício de ação não alcançável no corpo humano por meios farmacológicos, imunológicos ou metabólicos, mas que pode ser auxiliado na sua ação pretendida por tais meios.</li>
						</ul>
					</div>
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Dispositivo médico experimental</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Dispositivo médico cujo desempenho clínico, eficácia ou segurança está sendo avaliado em um ensaio clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Documentação</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Todos os registros, sob qualquer forma (incluindo dados escritos, eletrônicos, magnéticos e ópticos, eletrocardiogramas, raios-X e demais exames de imagem, entre outros), que descrevem ou registram os métodos, condutas e/ou resultados de um estudo, os fatores que o afetaram e as ações realizadas.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Documento-fonte</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documentos, dados e registros originais, tais como registros hospitalares, gráficos clínicos, prontuários médicos, dados laboratoriais, memorandos, diários de pacientes ou listas de verificação de avaliação, registros de dispensação da farmácia, dados gravados de instrumentos automatizados, cópias ou transcrições certificadas após a verificação como cópias precisas, microfichas, negativos fotográficos, microfilmes ou mídias magnéticas, raios-X e registros mantidos na farmácia, nos laboratórios e nos departamentos envolvidos na pesquisa, ou documentos semelhantes.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Documento para Importação (DI)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento emitido pela Anvisa, utilizado nas solicitações de importação ou exportação de produtos sob investigação, quando necessário.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Documentos essenciais</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documentos que, individual ou coletivamente, permitem a avaliação da condução ética e da qualidade dos dados produzidos por um estudo clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Dossiê de Desenvolvimento Clínico de Medicamento (DDCM)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Compilado de documentos a ser submetido à Anvisa com a finalidade de se avaliar as etapas inerentes ao desenvolvimento de um medicamento experimental visando à obtenção de informações para subsidiar o registro ou alterações pós-registro do referido produto.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Dossiê Específico do Ensaio Clínico (DEEC) </span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Compilado de documentos a ser submetido à Anvisa com a finalidade de se obter informações referentes aos ensaios clínicos, a serem conduzidos no Brasil, que fazem parte do Plano de Desenvolvimento do Medicamento Experimental.
				</li>
			</ul>

			<!-- E -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">E</li>
				<li class="list-group-item">
					<span class="glossario-termo">Emenda ao protocolo</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Qualquer proposta de modificação em um protocolo, apresentada sempre com a justificativa que a motivou, podendo tal emenda ser substancial ou não.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Emergência em saúde pública</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Situação que demande o emprego urgente de medidas de prevenção, de controle e de contenção de riscos, de danos e de agravos à saúde pública declaradas em situações que podem ser epidemiológicas (surtos e epidemias), de desastres, ou de desassistência à população.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Ensaio clínico</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Qualquer investigação intervencionista em participantes humanos destinada a descobrir ou verificar os efeitos clínicos, farmacológicos e/ou outros efeitos farmacodinâmicos de um(s) produto(s) em investigação; e/ou identificar quaisquer reações adversas a um(s) produto(s) em investigação; e/ou estudar a absorção, distribuição, metabolismo e excreção de um(s) produto(s) em investigação com o objetivo de verificar sua segurança e/ou eficácia. Além disso, para avaliar a segurança, o desempenho clínico ou a eficácia de dispositivo médico ou terapia avançada.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Ensaio clínico complexo</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Ensaio clínico não convencional no sentido de que possui elementos, características, métodos, ou a combinação deles, incluindo novas abordagens, que conferem complexidade ao seu desenho, condução, análises ou relatórios.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Estudo multicêntrico</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Vide “Pesquisa multicêntrica”
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Evento Adverso (EA)</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Qualquer ocorrência médica desfavorável ou não planejada (por exemplo, um achado laboratorial anormal, sintoma ou doença temporariamente associados ao uso de um medicamento) relacionada ou não ao uso do produto sob investigação, em participante de pesquisa. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Qualquer evento adverso que resulte em óbito, risco de morte, situações que requerem hospitalização ou prolongamento da hospitalização, incapacidade significativa, anomalia congênita ou evento clinicamente significativo. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Exigências regulatórias aplicáveis</span>
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
					Em geral, são todas as modificações que um sistema biológico produz em um princípio ativo. É o estudo da cinética (relação quantitativa entre a variável independente tempo e a variável dependente concentração) dos processos de absorção, distribuição, biotransformação e excreção dos medicamentos (princípios ativos e/ou seus metabólitos).
				</li>
				<li class="list-group-item">
					<span class="glossario-termo">Farmacodinâmica</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Modificações que um princípio ativo produz em um sistema biológico, ou seja, é o estudo dos efeitos bioquímicos e fisiológicos dos medicamentos e seus mecanismos de ação.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Ferramenta de aquisição de dados (Data Acquisition Tool - DAT)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Uma ferramenta impressa ou eletrônica projetada para coletar dados e metadados associados de um originador de dados em um estudo clínico, de acordo com o protocolo, e reportar os dados ao patrocinador. O originador de dados pode ser um ser humano (por exemplo, o participante ou a equipe do estudo), uma máquina (por exemplo, dispositivos vestíveis e sensores) ou um sistema computacional a partir do qual a transferência eletrônica de dados de um sistema para outro foi realizada (por exemplo, extração de dados de um prontuário eletrônico de saúde ou sistema laboratorial). Exemplos de DATs incluem, entre outros, CRFs, tecnologias de resposta interativa (IRTs), avaliações de desfechos clínicos (COAs), incluindo desfechos relatados pelo paciente (PROs) e dispositivos vestíveis, independentemente da mídia utilizada.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Ficha Clínica (Case Report Form - CRF)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
				Uma ferramenta de captura de dados criada para registrar as informações exigidas pelo protocolo a serem relatadas pelo investigador ao patrocinador sobre cada participante do estudo.
				</li>
			</ul>

			<!-- G -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">G</li>
				<li class="list-group-item">
					<span class="glossario-termo">Garantia de qualidade</span>
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
					<span class="glossario-termo">Informação de referência sobre segurança (<em>Reference Safety Information - RSI</em>) </span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					O RSI é uma lista de reações adversas graves esperadas, que são classificadas usando termos preferenciais (PTs) de acordo com o Dicionário Médico para Atividades Regulatórias (MedDRA). É usado para avaliar a expectativa de todas as reações adversas graves (SARs) 'suspeitas' que ocorrem em ensaios clínicos. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Inspeção</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					O ato por parte de uma autoridade regulatória de conduzir uma revisão oficial dos documentos, das instalações, dos registros e de quaisquer outros recursos considerados pela autoridade como relativos ao ensaio clínico e que podem estar localizados onde o ensaio é conduzido, nas instalações do patrocinador, da Organização Representativa de Pesquisa Clínica (ORPC) ou em outros locais que a autoridade regulatória considerar apropriados. Alguns aspectos da inspeção podem ser realizados remotamente.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Instância de análise ética em pesquisa</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Colegiado interdisciplinar competente para proceder à análise ética dos protocolos de pesquisa com seres humanos.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Instância nacional de ética em pesquisa</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Colegiado interdisciplinar e independente, integrante do Ministério da Saúde, sob a coordenação da área técnica responsável pelo campo da ciência e tecnologia, de caráter normativo, consultivo, deliberativo e educativo, competente para proceder à regulação, à fiscalização e ao controle ético da pesquisa, com vistas a proteger a integridade e a dignidade dos participantes da pesquisa, e para contribuir para o desenvolvimento da pesquisa dentro de padrões éticos.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Instituição</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Qualquer entidade, agência ou organização médica ou odontológica, pública ou privada, sob cuja alçada são conduzidos estudos clínicos.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Insumo Farmacêutico Ativo (IFA)</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Qualquer substância introduzida na formulação de uma forma farmacêutica que, quando administrada em um participante, atua como ingrediente ativo, podendo exercer atividade farmacológica ou outro efeito direto no diagnóstico, cura, tratamento ou prevenção de uma doença, podendo ainda afetar a estrutura e o funcionamento do organismo humano.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Integridade dos dados</span> 
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					A integridade dos dados inclui o grau em que os dados atendem aos critérios essenciais de serem atribuíveis, legíveis, contemporâneos, originais, precisos, completos, seguros e confiáveis, de modo que sejam adequados à finalidade.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Investigador / Investigador principal ou Pesquisador</span>
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Pessoa responsável por conduzir o estudo clínico em um centro de pesquisa, responsável legal  e líder da equipe do estudo. Um médico qualificado (ou dentista, conforme o caso), responsável por todas as decisões médicas (ou odontológicas) do estudo e corresponsável pela integridade e bem-estar dos participantes da pesquisa.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Investigador-coordenador ou Pesquisador-coordenador</span>
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Pessoa responsável pela coordenação da pesquisa e dos pesquisadores de diferentes centros participantes de pesquisa multicêntrica e corresponsável pela integridade e bem-estar dos participantes da pesquisa.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Investigador-patrocinador</span>
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Pessoa física responsável pela condução e coordenação de ensaios clínicos, isoladamente ou em um grupo, realizados mediante a sua direção imediata de forma independente, desenvolvidos com recursos financeiros e materiais próprios do investigador, de entidades nacionais ou internacionais de fomento à pesquisa, de entidades privadas e outras entidades sem fins lucrativos. As responsabilidades de um investigador-patrocinador incluem tanto as do patrocinador como as do investigador.
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
					<span class="glossario-termo">Medicamentos</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Vide “Produtos”.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Metadados</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					As informações contextuais necessárias para compreender um determinado elemento de dados. Metadados são informações estruturadas que descrevem, explicam ou facilitam a recuperação, o uso ou o gerenciamento de dados. Para os fins das Boas Práticas Clínicas, metadados relevantes são aqueles necessários para permitir a avaliação adequada da condução do estudo clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Monitor</span>
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Profissional capacitado, designado pelo patrocinador ou pela Organização Representativa de Pesquisa Clínica (ORPC) e responsável pelo monitoramento da pesquisa, que deve atuar em conformidade com os Procedimentos Operacionais Padrão (POP), as Boas Práticas Clínicas e as exigências regulatórias aplicáveis.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Monitoria</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Ato de rever continuamente o progresso de um ensaio clínico e certificar-se de que é conduzido, registrado e relatado de acordo com o protocolo, os Procedimentos Operacionais Padrão (POP), com as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.
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
					<span class="glossario-termo">Organismo Geneticamente Modificado (OGM)</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Organismo cujo material genético - DNA/RNA (ácido desoxirribonucleico/ácido ribonucleico) tenha sido modificado por qualquer técnica de engenharia genética.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Organização Representativa de Pesquisa Clínica (ORPC) / <em>Contract Research Organization - CRO</em> </span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Pessoa jurídica ou organização contratada pelo Patrocinador (ou Investigador-Patrocinador) para realizar uma ou mais tarefas e funções relacionadas a estudos clínicos, assumindo as responsabilidades do patrocinador perante as instâncias cabíveis.
				</li>
			</ul>

			<!-- P -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">P</li>

				<li class="list-group-item">
					<span class="glossario-termo">Parecer consubstanciado</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento que emite o resultado da apreciação de um estudo submetido às instâncias de análise ética.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Participante de pesquisa</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Pela regulamentação brasileira, indivíduo que, de forma livre e esclarecida, ou sob o esclarecimento e autorização de seu(s) responsável(eis) legal(ais), aceita participar voluntariamente da pesquisa. Podem pertencer ao grupo dos que recebem o produto sob investigação ou ao grupo de controle. Além disso, podem ser portadores de alguma comorbidade/patologia ou indivíduos saudáveis. Neste contexto, os termos "participante de pesquisa" e "participante" podem ser aplicados.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Patrocinador</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Pessoa física ou jurídica, pública ou privada, que assume responsabilidades pela pesquisa, apoiando de variadas formas, seja com financiamento, infraestrutura, recursos humanos ou apoio institucional. Um estudo clínico pode ter um ou vários patrocinadores, quando permitido pelos requisitos regulatórios. De acordo com os requisitos regulatórios aplicáveis, os patrocinadores podem decidir, em um acordo documentado, estabelecendo suas respectivas responsabilidades. Quando o acordo documentado não especificar a qual patrocinador uma determinada responsabilidade é atribuída, essa responsabilidade cabe a todos os patrocinadores.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Pesquisa clínica com seres humanos</span> 
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Conjunto de procedimentos científicos desenvolvidos de forma sistemática com seres humanos com vistas a: (a) avaliar a ação, a segurança e a eficácia de medicamentos, de produtos, de técnicas, de procedimentos, de dispositivos médicos ou de cuidados à saúde, para fins terapêuticos, preventivos ou de diagnóstico; (b) verificar a distribuição de fatores de risco, de doenças ou de agravos na população, ou; (c) avaliar os efeitos de fatores ou de estados sobre a saúde.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Pesquisa com seres humanos</span> 
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Pesquisa que, individual ou coletivamente, tem como participante o ser humano, em sua totalidade ou em parte, e o envolve de forma direta ou indireta, incluído o manejo de seus dados, informações ou material biológico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Pesquisa multicêntrica / Estudo multicêntrico</span> 
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Pesquisa executada em diferentes centros, com um pesquisador responsável pelo estudo em cada instituição, seguindo um protocolo único.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Placebo</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Formulação sem efeito farmacológico, ou de procedimento simulado, utilizada em grupos-controle de ensaios clínicos e destinados à comparação com a intervenção sob experimentação ou com a finalidade de mascaramento do tratamento
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Plano de fornecimento pós-estudo</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento elaborado pelo patrocinador e submetido à análise ética, com a justificativa para o fornecimento ou não do medicamento experimental ao participante da pesquisa após o término do ensaio clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Plano de monitoria</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Um documento que descreve a estratégia, os métodos, as responsabilidades e os requisitos para monitorar o estudo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Populações vulneráveis</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Indivíduos cuja vontade de participar do estudo possa ser indevidamente influenciada pela expectativa, justificada ou não, de benefícios associados à participação, ou de uma reação negativa, em caso de recusa, por parte de membros superiores de alguma hierarquia da qual façam parte ou à qual estejam submetidos. São exemplos: indivíduos pertencentes a grupos com uma estrutura hierárquica constituída, estudantes, funcionários subordinados de hospitais e laboratórios, da indústria farmacêutica, membros das forças armadas e detentos. Outros participantes de pesquisa vulneráveis são aqueles portadores de doenças incuráveis ou que estejam em casas de repouso, dependentes químicos, pessoas desempregadas ou em extrema pobreza, em situação de emergência, grupos étnicos minoritários, pessoas sem moradia, nômades, refugiados, menores e aqueles incapazes de atestar o próprio consentimento.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Prestador de serviços</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Uma pessoa ou organização (comercial, acadêmica ou outra) que fornece um serviço utilizado pelo patrocinador ou pelo pesquisador para realizar atividades relacionadas ao estudo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Procedimento otimizado de análise</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Mecanismo de avaliação técnica facilitado ou simplificado por práticas de confiança regulatória (Reliance) ou por critérios de risco ou complexidade do ensaio clínico ou do medicamento experimental.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Procedimentos Operacionais Padrão (POP)</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Instruções operacionais detalhadas, escritas, que têm por objetivo proporcionar a uniformidade de procedimentos.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Produto de comparação / Medicamento comparador </span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Medicamento registrado ou placebo utilizado no grupo controle de ensaio clínico para permitir a comparação de seus resultados com os do grupo que recebeu a intervenção sob investigação.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Produto de comparação modificado / Medicamento comparador modificado </span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Medicamento comparador registrado que tenha sofrido qualquer modificação, exceto reembalagem com material compatível, para ser utilizado no ensaio clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Produto de terapia avançada experimental</span>
					<span class="badge securanca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Tipo especial de medicamento complexo, utilizado em ensaio clínico, constituído de células que foram submetidas a manipulação extensa e/ou que desempenham função distinta da original, ou que consiste em gene humano recombinante ou contém gene humano recombinante, com finalidade de obter propriedades terapêuticas, preventivas ou de diagnóstico, ainda não registrado ou que está em fase de teste para indicação de uso ainda não aprovado pela autoridade sanitária competente.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Produto sob investigação / Medicamento experimental</span>
					<span class="badge securanca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Forma de apresentação farmacêutica de um princípio ativo ou placebo sendo testado ou usado como referência em um ensaio clínico, incluindo um produto com autorização comercial / de comercialização quando usado ou apresentado (formulado ou embalado) sob uma forma diferente da aprovada, ou usado para uma indicação não aprovada, ou quando usado para obter maiores informações sobre a forma aprovada. Produtos em investigação podem ser fármacos, medicamentos, produtos medicinais, vacinas e produtos biológicos.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Produto sob investigação complexo</span>
					<span class="badge securanca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Formulações e/ ou insumos farmacêuticos ou substâncias ativas com características ou propriedades físico-químicas ou biológicas que conferem complexidade
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Programa de fornecimento pós-estudo</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento elaborado pelo patrocinador e submetido à análise ética, com a descrição detalhada sobre a estratégia de fornecimento gratuito do produto experimental após o término do ensaio clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Programa de fornecimento pós-estudo</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento elaborado pelo patrocinador e submetido à análise ética, com a descrição detalhada sobre a estratégia de fornecimento gratuito do produto experimental após o término do ensaio clínico.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Projeto de pesquisa</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento que apresenta as ideias centrais da pesquisa, com descrição detalhada das ações e dos procedimentos que serão desenvolvidos durante a investigação.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Protocolo de pesquisa</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento que descreve toda a base do estudo, contendo justificativa, objetivos, desenho, metodologia, considerações estatísticas e organização do estudo. No entanto, estas informações podem ser fornecidas, de forma mais detalhada, por outros documentos referenciados pelo protocolo. Considera-se o termo protocolo o documento em si e as emendas ao protocolo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Provimento material prévio</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Compensação financeira para despesas do participante e de seus acompanhantes, quando necessário, realizada previamente à sua participação na pesquisa.
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
					<span class="glossario-termo">Reação Adversa a Medicamento (RAM)</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Resposta nociva e não intencional atribuída a um medicamento, nas doses normalmente utilizadas para profilaxia, diagnóstico ou tratamento de doenças ou para a modificação de uma função fisiológica. No contexto de desenvolvimento clínico, muitas vezes não há doses bem estabelecidas e as reações adversas a medicamentos não têm relação causal bem estabelecida com o produto e, assim, são consideradas suspeitas.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Reação adversa grave suspeita e inesperada (<em>Suspected Unexpected Serious Adverse Reaction - SUSAR</em>)</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Uma reação adversa que atende a três critérios: (a) suspeita - há uma possibilidade razoável de que o medicamento experimental ou o comparador ativo tenha causado a reação adversa medicamentosa; (b) inesperada - uma reação adversa cuja natureza ou gravidade não é consistente com as informações aplicáveis do produto (por exemplo, Brochura do Investigador ou bula), e; (c) grave. Vide “Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)”.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Reação adversa inesperada ao medicamento</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Uma reação adversa, cuja natureza ou severidade não seja condizente com as informações aplicáveis ao produto (ex.: Brochura do Investigador para produtos sob investigação não aprovados ou bula/resumo das características do produto para os aprovados). 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Registros essenciais</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Registros essenciais são os documentos e dados (e metadados relevantes), em qualquer formato, associados a um estudo clínico que facilitam o seu gerenciamento contínuo e, coletivamente, permitem a avaliação dos métodos utilizados, dos fatores que afetam o estudo e das ações tomadas durante a sua condução para determinar a confiabilidade dos resultados produzidos e a verificação de que a pesquisa foi conduzida de acordo com as BPC e os requisitos regulatórios aplicáveis.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Registros-fonte</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
				Documentos ou dados originais (incluindo metadados relevantes) ou cópias certificadas dos documentos ou dados originais, independentemente da mídia utilizada. Isso pode incluir registros/anotações/prontuários médicos/de saúde dos participantes do ensaio; dados fornecidos/inseridos pelos participantes do ensaio (por exemplo, resultados relatados eletronicamente pelo paciente - ePROs); registros de profissionais de saúde de farmácias, laboratórios e outras instalações envolvidas no ensaio clínico; e dados de instrumentos automatizados, como dispositivos vestíveis e sensores.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Relatório anual de acompanhamento de ensaio clínico</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Documento de periodicidade anual contendo informações específicas sobre a condução de um determinado ensaio clínico em todos os centros participantes do estudo no Brasil, de acordo com o protocolo clínico e as BPC. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Relatório de atualização de segurança do desenvolvimento do medicamento experimental (<em>Development Safety Update Report - DSUR</em>) </span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Relatório periódico harmonizado contendo informações de segurança e desenvolvimento de um medicamento experimental.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Relatório de Auditoria</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Avaliação por escrito realizada pelo auditor do patrocinador sobre os resultados e impressões da auditoria.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Relatório de estudo clínico / Relatório de pesquisa</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Descrição por escrito do ensaio/estudo de qualquer agente terapêutico, profilático ou de diagnóstico conduzido em seres humanos, no qual as descrições clínicas e estatísticas, apresentações e análises estão plenamente integradas em um único relatório. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Relatório interino do estudo clínico</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Relatório contendo os resultados intermediários e sua avaliação baseada em análises realizadas no decorrer de um estudo. 
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Relatório de monitoria</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
					Relatório que descreve os achados e as impressões do monitor para o patrocinador, após cada visita de monitoria do estudo e/ou outros comunicados relacionados, de acordo com os POP do patrocinador.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Relatório final do estudo clínico</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
				Documento que contém informações específicas sobre a condução de um determinado estudo clínico em todos os centros participantes no Brasil, de acordo com o protocolo clínico e as BPC.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Reliance</span> 
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
				O ato pelo qual a Anvisa pode considerar e dar peso significativo às avaliações realizadas por uma Autoridade Reguladora Estrangeira Equivalente (AREE) confiável, como referência única ou complementar, para suas decisões.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Representante do participante da pesquisa / Representante legal</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
				Pessoa ou órgão legalmente autorizados a consentir em nome do possível participante de pesquisa menor de 18 anos e/ou de pessoa com ausência de autonomia, permanente ou temporária, em participar da pesquisa. Nos casos em que um representante legal fornece o consentimento, as atividades relacionadas com o processo de consentimento e/ou  com a retirada do consentimento, quando aplicável, serão de responsabilidade desse representante.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Ressarcimento</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span>
					<br />
				Compensação material, exclusivamente de despesas do participante e de seus acompanhantes, quando necessário, tais como despesas com transporte e alimentação.
				</li>
			</ul>

			<!-- S -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">S</li>
				<li class="list-group-item">
					<span class="glossario-termo">Sub investigador</span> 
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Membro específico da equipe do estudo clínico, designado e supervisionado pelo investigador no centro de pesquisa para conduzir procedimentos essenciais e/ou tomar decisões importantes relacionadas ao estudo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Submissão contínua</span> 
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Procedimento de apresentação de dados parciais na medida em que forem gerados, previamente à submissão definitiva do Dossiê de Desenvolvimento Clínico de Medicamento (DDCM).
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Substância ativa</span> 
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					É a substância com efeito farmacológico para a atividade terapêutica pretendida, utilizada na produção de determinado produto biológico.
				</li>
			</ul>

			<!-- T -->
			<ul class="lista-glossario list-group">
				<li class="list-group-item active">T</li>
				<li class="list-group-item">
					<span class="glossario-termo">Termo de Consentimento Livre e Esclarecido (TCLE)</span> 
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span><br />
					Documento no qual é explicitado o consentimento livre e esclarecido do participante da pesquisa, ou do seu responsável legal, de forma escrita, com todas as informações necessárias, em linguagem clara e objetiva, de fácil entendimento, para o completo esclarecimento sobre a pesquisa da qual se propõe participar.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Testemunha imparcial</span>
					<span class="badge atores rounded-pill text-bg-primary">Atores</span>
					<br />
					Indivíduo sem participação na pesquisa e não vinculado a pessoa nela envolvida diretamente que acompanha o processo de consentimento livre e esclarecido, inclusive assinando o Termo de Consentimento Livre e Esclarecido (TCLE), nos casos em que o participante da pesquisa, ou seu representante legal, não seja capaz de ler e/ou escrever, garantindo assim que as informações redigidas destinadas aos participantes sejam as mesmas informadas verbalmente.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Trilha de auditoria</span>
					<span class="badge documentos rounded-pill text-bg-primary">Documentos</span><br />
					<br />
					Documentação que permite a reconstrução do curso dos eventos e /ou achados. Inclui registros de metadados, capturando detalhes sobre ações (manuais ou automatizadas) realizadas em relação à coleta de informações e dados e, quando aplicável, às atividades em sistemas informatizados. A trilha de auditoria deve mostrar atividades, entradas iniciais e alterações em campos de dados ou registros, por quem, quando e, quando aplicável, por que, permitindo a rastreabilidade. Em sistemas informatizados, a trilha de auditoria deve ser segura, gerada por computador e com registro de data e hora.
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
					<span class="glossario-termo">Validação de sistemas computadorizados</span>
					<span class="badge processos rounded-pill text-bg-primary">Processos</span>
					<br />
					Um processo para estabelecer e documentar que os requisitos especificados de um sistema computadorizado podem ser atendidos de forma consistente desde o projeto até a desativação do sistema ou a transição para um novo sistema. A abordagem para validação deve ser baseada em uma avaliação de risco que leve em consideração o uso pretendido do sistema e o potencial do sistema para afetar a proteção dos participantes e a confiabilidade dos resultados do estudo.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Violação de protocolo</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Desvio de protocolo que pode comprometer a qualidade dos dados, a integridade da pesquisa ou a segurança ou os direitos dos participantes da pesquisa.
				</li>

				<li class="list-group-item">
					<span class="glossario-termo">Vulnerabilidade</span>
					<span class="badge seguranca rounded-pill text-bg-primary">Segurança</span>
					<br />
					Condição na qual pessoa ou grupo de pessoas tenha reduzida a capacidade de tomar decisões e de opor resistência na situação de pesquisa, em decorrência de fatores individuais, psicológicos, econômicos, culturais, sociais ou políticos, observado, em qualquer caso, o consentimento descrito para situações de vulnerabilidade.
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

// 🔍 Filtro do glossário — cada local funciona de forma independente

document.addEventListener("DOMContentLoaded", () => {
	// ⚙️ CONFIGURAÇÕES GERAIS
	const ROLAR_ATE_RESULTADO = false; // rola até o primeiro resultado visível
	const BUSCAR_NO_INICIO = true; // true = busca só termos que comecem com o texto digitado

	// --- Função que ativa o filtro em um container específico ---
	function ativarFiltroGlossario({
		containerSelector,
		inputSelector,
		btnClearSelector,
		resetOnHideSelector = null // opcional: selector do modal (para limpar ao fechar)
	}) {
		const filtroInput = document.querySelector(inputSelector);
		const btnClear = document.querySelector(btnClearSelector);
		const container = document.querySelector(containerSelector);

		if (!filtroInput || !container) return;

		function aplicarFiltro() {
			const filtro = filtroInput.value.toLowerCase();
			const listas = container.querySelectorAll("ul.lista-glossario, ul.listaglossario");
			let primeiroResultado = null;

			// mostra/esconde botão X
			if (btnClear) btnClear.classList.toggle("d-none", filtro === "");

			listas.forEach((ul) => {
				const titulo = ul.querySelector("li.active");
				const itens = ul.querySelectorAll("li:not(.active)");
				let temResultadoNoGrupo = false;

				itens.forEach((li) => {
					const termoSpan = li.querySelector(".glossario-termo");
					if (!termoSpan) return;
					const termoOriginal = termoSpan.textContent;
					const termoLower = termoOriginal.toLowerCase();

					// remove highlight anterior
					termoSpan.innerHTML = termoOriginal;

					if (filtro === "") {
						li.style.display = "";
						temResultadoNoGrupo = true;
						return;
					}

					let index = BUSCAR_NO_INICIO
						? (termoLower.startsWith(filtro) ? 0 : -1)
						: termoLower.indexOf(filtro);

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

				if (titulo) titulo.style.display = temResultadoNoGrupo ? "" : "none";
			});

			// --- rolagem opcional ---
			if (ROLAR_ATE_RESULTADO && primeiroResultado) {
				primeiroResultado.scrollIntoView({ behavior: "smooth", block: "center" });
			}
		}

		function limparFiltro() {
			filtroInput.value = "";
			aplicarFiltro();
		}

		// eventos
		filtroInput.addEventListener("input", aplicarFiltro);
		if (btnClear) {
			btnClear.addEventListener("click", () => {
				limparFiltro();
				filtroInput.focus();
			});
		}

		// limpa quando o modal fecha (se aplicável)
		if (resetOnHideSelector) {
			const modal = document.querySelector(resetOnHideSelector);
			if (modal) {
				modal.addEventListener("hidden.bs.modal", () => {
					limparFiltro();
				});
			}
		}

		// aplica uma vez no início
		aplicarFiltro();
	}

	// --- ativa para o glossário do modal ---
	ativarFiltroGlossario({
		containerSelector: "#modal-glossario",
		inputSelector: "#glossarioFiltro",
		btnClearSelector: "#btnClearFiltro",
		resetOnHideSelector: "#modal-glossario"
	});

	// --- ativa para o glossário da aula ---
	ativarFiltroGlossario({
		containerSelector: ".glossario-aula",
		inputSelector: "#glossarioFiltroAula",
		btnClearSelector: "#btnClearFiltroAula"
	});
});

