export const TodoFilter = ({ value, onChange }) => (
  <div>
    <p>Filter</p>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

// const mapStateToProps = state => ({
//     value: state.todos.filter,
//   });

//   const mapDispatchToProps = dispatch => ({
//     onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
//   });

//   export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
