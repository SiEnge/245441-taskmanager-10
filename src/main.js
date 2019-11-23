import {createMenuTemlate} from './components/menu.js';
import {createFilterTemlate} from './components/filter.js';
import {createBoardTemlate} from './components/board.js';
import {createEditTaskTemlate} from './components/edit-task.js';
import {createTaskCardTemlate} from './components/task-card.js';
import {createLoadMoreButtonTemlate} from './components/load-more-button.js';

const TASK_COUNT = 3;
const mainElement = document.querySelector('.main');
const headerElement = mainElement.querySelector('.main__control');

// функция вставки компонента на страницу
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// 1. вставка в шапку "Меню"
render(headerElement, createMenuTemlate(), 'beforeend');

// 2. вставка в тело сайта "Фильтр"
render(mainElement, createFilterTemlate(), 'beforeend');

// 3. вставка в тело сайта "Списка задача", в который вставляем другие компоненты
render(mainElement, createBoardTemlate(), 'beforeend');

// 3.1. вставка "Формы редактирования"
const listBoardElement = mainElement.querySelector('.board__tasks');
render(listBoardElement, createEditTaskTemlate(), 'beforeend');

// 3.2. вставка "Карточки задач" в количестве 3х штук (=TASK_COUNT)
for (let i = 0; i < TASK_COUNT; i++) {
  render(listBoardElement, createTaskCardTemlate(), `beforeend`);
}

// 4. вставка в список задач "Кнопки Загрузить еще"
const boardElement = mainElement.querySelector('.board');
render(boardElement, createLoadMoreButtonTemlate(), 'beforeend');
