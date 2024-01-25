/**
 *  Component TodoItem
 *
 *  Represents and renders each item in the todo list
 *
 *  mandatory props - name,id.complete
 */
import PropTypes from 'prop-types';

export default Object.assign(
    function (props) {
        return (
            <div>
                <span
                    onClick={() => props.toggle && props.toggle(props.item.id)}
                    style={{
                        textDecoration: props.item.complete ? 'line-through' : 'none',
                    }}
                >
                    {props.item.name}
                </span>
                <button onClick={() => props.remove(props.item.id)}>X</button>
            </div>
        );
    },
    {
        props: PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            complete: PropTypes.bool.isRequired,
        }),
    },
);
