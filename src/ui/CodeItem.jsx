function CodeItem({index ,name}) {
    return (
      <>
        <span>&apos;</span>
        {name}
        <span>&apos;</span>
        {index < 6 && <span>,</span>}
      </>
    );
}

export default CodeItem
