/**
 *  Component TodoItem
 *
 *  Represents and renders each item in the todo list
 *
 *  mandatory props - item and id
 */
import PropTypes from 'prop-types';

export default Object.assign(
    function (props) {
        return (
            <div>
                <span
                    onClick={() => props.toggle && props.toggle(props.item.id)}
                    style={{textDecoration: item.complete ? 'line-through' : 'none'}}
                >
                    {props.item.name}
                </span>
                <button onClick={() => props.remove(item)}>X</button>
            </div>
        );
    },
    {
        props: PropTypes.shape({
            item: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    },
);
