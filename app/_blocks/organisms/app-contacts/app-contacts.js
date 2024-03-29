/* eslint-disable no-undef */
// script
class RQAgencyMap extends HTMLElement {
  connectedCallback() {
    ymaps.ready(() => {
      this.mapNode = this.querySelector('#map');

      if (!this.mapNode) return;

      this.map = new ymaps.Map(
        this.mapNode,
        {
          center: this.mapNode.dataset.mapCoords.split(', '),
          zoom: 12,
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );
      this.icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfNTY0NDkpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiA1OEMyOC42NzQgNTguMDE4IDEyIDMyLjM2MiAxMiAyNEMxMiAxMi45NTYgMjAuOTU0IDQgMzIgNEM0My4wNDYgNCA1MiAxMi45NTYgNTIgMjRDNTIgMzIuMjUgMzUuMjc0IDU4LjAxOCAzMiA1OFpNMzIgMEMxOC43NDYgMCA4IDEwLjc0NiA4IDI0QzggMzQuMDM2IDI4LjAxIDY0LjAyMiAzMiA2NEMzNS45MjggNjQuMDIyIDU2IDMzLjkgNTYgMjRDNTYgMTAuNzQ2IDQ1LjI1NCAwIDMyIDBaIiBmaWxsPSIjMzUwNTg3Ii8+CjxwYXRoIGQ9Ik00NS4wMDE2IDIzLjUxNDVDNDUuMDAxNiAyMC40MzY2IDQyLjY0ODMgMTggMzguMjExMSAxOEMzMy43NzM5IDE4IDMxLjQwNjIgMjAuNDM2NiAzMS40MDYyIDIzLjUxNDVDMzEuNDA2MiAyNi41Nzg4IDMzLjc0NCAyOS4wMjkgMzguMjExMSAyOS4wMjlDMzkuNjM2NyAyOS4wMjkgNDAuODQyMSAyOC43ODExIDQxLjgyMjQgMjguMzQ0Nkw0Mi40NjQgMjkuMDI5SDQ1LjAwMTZMNDMuNDEzMiAyNy4zMDYzQzQ0LjQ2NjUgMjYuMzIyMyA0NS4wMDE2IDI0Ljk4OTMgNDUuMDAxNiAyMy41MTQ1Wk0zOC4yMTExIDI3LjA4NjhDMzUuMDY5IDI3LjA4NjggMzMuNDYxNSAyNS40ODc1IDMzLjQ2MTUgMjMuNTE0NUMzMy40NjE1IDIxLjUyNjcgMzUuMDk4OSAxOS45MTI2IDM4LjIxMTEgMTkuOTEyNkM0MS4zMjMyIDE5LjkxMjYgNDIuOTQ2NCAyMS41MjY3IDQyLjk0NjQgMjMuNTE0NUM0Mi45NDY0IDI0LjM4MzggNDIuNjM2MyAyNS4xODA0IDQyLjAyMjMgMjUuNzk5NUw0MC42MzUgMjQuMjk2M0w0MC42MDUxIDI0LjI5NTFMMzkuNjc4NiAyMy4yOTc1SDM3LjA5MzFMNDAuMzU2MSAyNi43Nzk4QzM5Ljc0OCAyNi45NzcxIDM5LjAzMjIgMjcuMDg2OCAzOC4yMTExIDI3LjA4NjhaIiBmaWxsPSIjMzUwNTg3Ii8+CjxwYXRoIGQ9Ik0zMS4wNjMyIDIxLjc4NzRDMzEuMDYzMiAxOS44NTM5IDI5LjU1ODYgMTguMjg5MSAyNy42NjczIDE4LjI4OTFIMTlWMjkuMDI4M0gyMS4wMTA5VjI1LjMxNjZIMjYuNjI2TDMwLjA4ODggMjkuMDI5NUgzMi42MjY0TDI4Ljk1NzcgMjUuMDUyN0MzMC4xOTkgMjQuNTIyNSAzMS4wNjMyIDIzLjI1MjQgMzEuMDYzMiAyMS43ODc0Wk0yMS4wMTA5IDIwLjI4NDJIMjcuNTA0NkMyOC4zMjMzIDIwLjI4NDIgMjguOTc5MiAyMC45NzQ4IDI4Ljk3OTIgMjEuODAzNEMyOC45NzkyIDIyLjY0NjkgMjguMzI0NSAyMy4zMjI2IDI3LjUwNDYgMjMuMzIyNkgyMS4wMTA5VjIwLjI4NDJaIiBmaWxsPSIjMzUwNTg3Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV81NjQ0OSI+CjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K';
      this.placemark = new ymaps.Placemark(
        this.map.getCenter(),
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: this.icon,
          iconImageSize: [64, 64],
        },
      );

      this.map.geoObjects.add(this.placemark);
    });
  }
}

customElements.define('rq-agency-map', RQAgencyMap);
