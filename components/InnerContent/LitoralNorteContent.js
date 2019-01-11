import React, { Component } from 'react';
import { Row, Col, Menu, Icon, Dropdown, Button, message } from 'antd';

export default class LitoralNorteContent extends Component {
  render() {
    return (
      <div className="WrapperContent">
        {/*******TITLE AREA**********/}
        <Row>
          <Col lg={24}>
            <h1 className="Title">Programa Litoral Norte</h1>
          </Col>
        </Row>
        <Row className="ContentSection">
          {/*******LEFT COLUMN**********/}
          <Col lg={12}>
						<div className="ItemList">
							<h4>1º Módulo - Mar: 29, 30 e 31</h4>
							<h5>Pedro Franco</h5>
							<ul>
								<li>Introdução ao Yoga</li>
								<li>História do Yoga</li>
								<li>Tipos de yoga</li>
							</ul>            
							<p>
								<b>Prática:</b>Kramas - Desenvolvendo uma prática adaptativa para todos os níveis de praticantes.<br/>
								Kriyas<br/>
								Ajustes
							</p>
						</div>

						<div className="ItemList">
							<h4>2º Módulo - Abr: 26, 27 e 28</h4>
							<h5>Pedro Franco</h5>
							<ul>
								<li>Yoga Tântrico</li>
							</ul>            
							<p>
								<b>Teoria:</b>Shiva Sutra - Hatha Yoga Pradipka<br/>
								<b>Yoga Clássico:</b>Ashtanga Raja Yoga<br/>
								Yoga Classico de Patanjali Yama e Nyama<br/>
								Principais Sutras<br/>
								<b>Prática:</b>Surya Namaskar e Shiva Namaskar<br/>
								Ajustes
							</p>
						</div>

						<div className="ItemList">
							<h4>3º Módulo - Mai: 24, 25 e 26</h4>
							<h5>Teo Balieiro e Re Kerlakhian</h5>
							<ul>
								<li>Bhakti Yoga Iniciação a musicalidade - mantras</li>
								<li>Poder dos Elementos e ritualização - altares</li>
								<li>CJA - Cultivo do Jardim do amor</li>
								<li>Prática Restaurativa - Yoga Vibracional</li>
								<li>Prática de Chandra Namaskar</li>
							</ul>            
						</div>

						<div className="ItemList">
							<h4>4º Módulo - Jun: 07, 08 e 09</h4>
							<h5>Lucas Ribeiro</h5>         
							<p>
								<b>Prática:</b>Introdução ao Surya Namaskar - Metodologia do Vinyasa e ajustes<br/>
							</p>

							<h5>Renata Mozzini</h5>         
							<p>
								Propósito e Dharma Business Yoga - Aprendendo sobre a profissão de Professor de Yoga<br/>
								Metodologia de montagem de práticas 
							</p>
						</div>
        	</Col>
					
					{/*******RIGHT COLUMN **********/}
          <Col lg={12}>
						<div className="ItemList">
							<h4>5º Módulo - Jul: 05, 06 e 07 </h4>
							<h5>Isabella Pitaki</h5>         
							<p>
								Medicina Natural e Ayurveda<br/>
								Yoga para Gestantes
							</p>

							<h5>Antonio Tigre</h5>         
							<p>
								Yoga para Crianças
							</p>
						</div>
					</Col>

					<Col lg={12}>
						<div className="ItemList">
							<h4>6º Módulo - Ago: 16, 17 e 18</h4>
							<h5>Pedro Franco</h5>
							<p>
								Revisão de conteúdo
								Anatomia bioenergética e biomecânica
								Ajustes
							</p>
						</div>
					</Col>
					
					<Col lg={12}>
						<div className="ItemList">
							<h4>7º Módulo - Set: 06, 07 e 08</h4>
							<h5>Felipe Peres</h5>
							<p>
								Princípios do Ashtanga e Acroyoga
							</p>
							<h5>Rodrigo Duprat</h5>
							<p>
								Medicina x Yoga
								Anatomia Holistica
								Fascias e meridianos
								Trilhos anatômicos
							</p>
						</div>
					</Col>

					<Col lg={12}>
					<div className="ItemList">
						<h4>8º Módulo - RETIRO - Out: 11, 12 e 13</h4>
						<h5>Retiro (valor cobrado à parte)</h5>
						<p>Apresentação dos trabalhos</p>
					</div>
					
					</Col>
        </Row>
				<Row>
					<Col lg={24} className="ConclusaoSection">
						<h2>Conclusão de Curso</h2>
							O trabalho de conclusão do curso será a apresentação de dois projetos que reunem e colocam na prática todo o conhecimento adquirido pelos alunos durante o curso.
							- O primeiro é um projeto de Yoga Terapêutico, onde o aluno aplica o Yoga de forma terapêutica para tratar alguma doença ou disfunção.
							- O segundo é o Projeto de Karma Yoga, onde o aluno deve levar o yoga de forma gratuíta, para fora dos estúdios para algum público carente que não tenha acesso. 
							Nos dois projetos o aluno deverá apresentar quais as técnicas do yoga aplicadas, quais os benefícios, detalhando como utilizou o Yoga para transformar a vida das pessoas.
					</Col>
				</Row>
        <style jsx global>{`
          .WrapperContent {
            padding: 5vh 15vw;
          }
          .Title {
            color: #3c769e;
						font-size: 50px;
						font-family: 'redvevet'; 
          }
					.ContentSection{
						padding: 50px 0;
					}
					.ContentSection .ItemList{
						margin-bottom: 34px;
						font-family: 'Candara';
						src: url('../static/fonts/Candara.woff') format('woff');
					}
					.ContentSection .ItemList h4{
						color: #212121;
						font-weight: bold;
						font-size: 18px;	
						font-family: 'Candara';
					}
					.ContentSection .ItemList h5{
						color: #3d3d3d;
						font-size: 16px;
						font-style: italic;
						margin-bottom: 15px;	
						font-family: 'Candara';
					}
					.ContentSection .ItemList ul{
						color: #5a5a5a;
						font-size: 14px;
						margin-bottom: 15px;
					}
					.ContentSection .ItemList ul li::before {
						content: '•'; 
						color: #3c769e;
  					display: inline-block; 
						width: 1em;
  					margin-left: -1em;
					}
					.ContentSection .ItemList p{
						color: #5a5a5a;
						font-size: 14px;
						max-width: 80%;
					}
					.ConclusaoSection{
						margin-top: 50px;
						font-family: 'Candara';
					}
					.ConclusaoSection h2{
						font-size: 30px;
						color: #3c769e;
						font-weight: bold;
						padding-bottom: 20px;
						font-family: 'Candara';
					}
        `}</style>
      </div>
    );
  }
}
