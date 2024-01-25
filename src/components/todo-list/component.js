/**
 *  Component TodoList
 *
 *  Represents and renders a todo list with todo items
 *
 *  mandatory props - array of list of type string
 */
import PropTypes from 'prop-types';

export default Object.assign(
    function (props) {
        return (
            <div>
                <header data-testid="todoList">TODO LIST</header>
                <section>
                    <ul>
                        {props.list.length &&
                            props.list.map((listItem, index) => (
                                <li key={String(Math.random * index)}>{listItem}</li>
                            ))}
                    </ul>
                </section>
            </div>
        );
    },
    {},
    {
        props: PropTypes.shape({
            list: PropTypes.arrayOf('string'),
        }),
    },
);
