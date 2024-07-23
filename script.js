document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("container", {
    chart: {
      type: "line",
    },
    title: {
      text: "Esempio di Grafico Lineare",
    },
    subtitle: {
      text: "Source: example.com",
    },
    xAxis: {
      categories: [
        "Gen",
        "Feb",
        "Mar",
        "Apr",
        "Mag",
        "Giu",
        "Lug",
        "Ago",
        "Set",
        "Ott",
        "Nov",
        "Dic",
      ],
    },
    yAxis: {
      title: {
        text: "Valore",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: "2024",
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
    ],
  });
});
