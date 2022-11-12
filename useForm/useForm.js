import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    /**
     * @param {Object} event that is triggered by the input
     * @description function to handle the input change 
     */
    const handleInputChange = ({ target }) => {

        // get the name and value from the input
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    /**
     * @description function to reset the form
     */
    const handleResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        handleInputChange,
        handleResetForm,
    }
}