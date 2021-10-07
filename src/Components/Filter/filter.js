import PropTypes from 'prop-types';
import s from '../Filter/filter.module.css'
import { connect } from 'react-redux';
import { setFilter } from '../../Redux/contacts/contact.actions';
import { getFilter } from '../contact-selectors';

function Filter ({onFilterInputChange, filter}) {
    return (
        <label>
            <input
                className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={(e) => onFilterInputChange(e.currentTarget.value)}
            />
        </label>
    );
};

const mapStateToProps = (state) => {
    return {
        filter: getFilter(state)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFilterInputChange: (inputValue) => dispatch(setFilter(inputValue))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    onFilterInputChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}