function CodeItem({index ,name}) {
    return (
      <>
        <span>&apos;</span>
        {name}
        <span>&apos;</span>
        {index < 4 && <span>,</span>}
      </>
    );
}

export default CodeItem
