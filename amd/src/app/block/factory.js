// eslint-disable-next-line no-unused-vars
import BaseFactory from '../factory';
import EventHandler from "./event_handler";
import CourseFactory from "./course/factory";
import ItemFactory from "./item/factory";
import BlockElement from "./element";

export default class Factory {
    /**
     * @type {BaseFactory}
     */
    #baseFactory;

    /**
     * @param {BaseFactory} baseFactory
     */
    constructor(baseFactory) {
        this.#baseFactory = baseFactory;
    }

    /**
     * @returns {EventHandler}
     */
    eventHandler() {
        return new EventHandler(this.#baseFactory);
    }

    /**
     * @returns {CourseFactory}
     */
    course() {
        return new CourseFactory(this.#baseFactory);
    }

    /**
     * @returns {ItemFactory}
     */
    item() {
        return new ItemFactory(this.#baseFactory);
    }

    element(element) {
        return new BlockElement(this.#baseFactory, element);
    }
}