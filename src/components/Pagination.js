import React from 'react';
import ExternalPagination from 'react-js-pagination';

export class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = { ...props };
    this.className = props.className;
    this.state = { activePage: 1 };

    this.totalItens = props.totalItens;
    this.itemPerPage = props.itemPerPage || 20;
    this.pageRange = props.pageRange || 5;
    this.firstPageText = props.firstPageText || 'Primeiro';
    this.lastPageText = props.lastPageText || 'Último';
    this.prevPageText = props.prevPageText || '<<';
    this.nextPageText = props.nextPageText || '>>';

    this.classNames = [];
    if (this.className) this.classNames.push(this.className);
  }

  __handlePagination = page => {
    this.setState({ activePage: page });
  };

  render() {
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
        activePage={this.state.activePage}
        itemsCountPerPage={this.itemPerPage}
        totalItemsCount={this.totalItens}
        pageRangeDisplayed={this.pageRange}
        onChange={this.__handlePagination}
      />
    )
  }
}
