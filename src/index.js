import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Personagem } from "./modules/personagem.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antonio', 'Fogo', 5, 7);
const arqueiroLucas = new Arqueiro('Lucas', 5);
const arqueiroMagoLuke = new ArqueiroMago('Luke', 10, 'Ar', 4, 8);
const guerreiroKirito = new Guerreiro('Kirito', 7);

const personagens = [magoAntonio, arqueiroLucas, arqueiroMagoLuke, guerreiroKirito];

new PersonagemView(personagens).render();