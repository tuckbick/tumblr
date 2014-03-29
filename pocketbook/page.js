var PageView = function($el) {
    var self = this;

    self.$el = $el;
    self.$topbar = $el.find('#topbar');
    self.$root = $el.find('#root');
    self.$root.css('minHeight', app.$win.height() - self.$topbar.height());

    $el.find('#topbar a').click(function(e) {
        e.preventDefault();
        self.toggle();
    });
}

PageView.prototype.toggle = function(e) {
    this.menuOpen = !this.menuOpen;
    window.scrollTo(0,0);
    this.menuOpen ? this.closeMenu() : this.openMenu();
}

PageView.prototype.closeMenu = function() {
    app.$el.addClass('sidebar-open');
    var sidebarHeight = app.sidebar.$contents.height();

    // when menu is very small, adjust to height of page
    app.$el.css({
        minHeight: sidebarHeight,
        maxHeight: sidebarHeight
    })
    // set viewport height to sidebar height
    app.$viewport.css({
        minHeight: window.innerHeight,
        maxHeight: sidebarHeight
    })
    // when page is very small, adjust to height of sidebar
    this.$root.css({
        minHeight: window.innerHeight - this.$topbar.height(),
        maxHeight: sidebarHeight
    })
}

PageView.prototype.openMenu = function() {
    var pageHeight = app.page.$el.height();
    // when page is very small
    this.$root.css({
        minHeight: pageHeight - this.$topbar.height(),
        maxHeight: ''
    })
    // set viewport height to page height
    app.$viewport.css({
        minHeight: pageHeight,
        maxHeight: ''
    })
    // when menu is very small
    app.$el.css({
        minHeight: pageHeight,
        maxHeight: ''
    })
    app.$el.removeClass('sidebar-open');
}
