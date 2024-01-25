/**
 *  Component TodoItem
 *
 *  Represents and renders each item in the todo list
 *
 *  mandatory props - item and id
 */
import PropTypes from 'prop-types';

export default Object.assign(
    function () {
        return <div data-testid="todoItem">TODO ITEM</div>;
    },
    {},
    {
        props: PropTypes.shape({
            item: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    },
);
