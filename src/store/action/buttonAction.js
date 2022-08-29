import { INCREMENT,DECREMENT } from "./type.action";

export const incrementValue = (values) => ({
    type:INCREMENT,
    values
});

export const decrementValue = (values) => ({
    type:DECREMENT,
    values
});
