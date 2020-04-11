import React from 'react';
import ExternalPagination from 'react-js-pagination';

export class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.itemPerPage = props.itemPerPage || 20;
    this.pageRange = props.pageRange || 5;
    this.firstPageText = props.firstPageText || 'Primeiro';
    this.lastPageText = props.lastPageText || 'Último';
    this.prevPageText = props.prevPageText || '<<';
    this.nextPageText = props.nextPageText || '>>';

    this.classNames = [];
    if (props.className) this.classNames.push(props.className);
  }

  render() {
    const { handlePagination, activePage, totalItens } = this.props;

    if (!handlePagination || !activePage || !totalItens) {
      return null;
    }

    return (
      <ExternalPagination
        firstPageText={this.firstPageText}
        lastPageText={this.lastPageText}
        prevPageText={this.prevPageText}
        nextPageText={this.nextPageText}
        itemClass='page-item'
        innerClass='pagination'
        linkClass='page-link'
        activeLinkClass='text-white'
        activePage={activePage}
        totalItemsCount={totalItens}
        itemsCountPerPage={this.itemPerPage}
        pageRangeDisplayed={this.pageRange}
        onChange={page => handlePagination(page)}
      />
    )
  }
}
