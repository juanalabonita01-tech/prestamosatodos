$(document).ready(function () {
  $("#typeDocument").on("change", function () {
    if ($(this).val()) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  $("#numeroDni").on("input", function () {
    if ($(this).val().length >= 7) {
      $(this).addClass("bordesVerdes-input");
      $(".labelDni2").removeClass("colorLabelIncorrecto-label");
    } else {
      $(this).removeClass("bordesVerdes-input");
      $(this).addClass("bordesRojos-input");
    }
  });

  $("#numeroDni").focus("input", function () {
    $(".labelDni2").addClass("labelArribaInpusDatos");
  });

  $("#numeroDni").blur("input", function () {
    if ($(this).val().length >= 7) {
    } else {
      $(this).addClass("bordesRojos-input");
      $(".labelDni2").removeClass("labelArribaInpusDatos");
      $(".labelDni2").addClass("colorLabelIncorrecto-label");
    }
  });

  $("#firstName").on("input", function () {
    if ($(this).val().length >= 3) {
      $(this).addClass("bordesVerdes-input");
      $(".labelDni5").removeClass("colorLabelIncorrecto-label");
    } else {
      $(this).removeClass("bordesVerdes-input");
      $(this).addClass("bordesRojos-input");
    }
  });

  $("#firstName").focus("input", function () {
    $(".labelDni5").addClass("labelArribaInpusDatos");
  });

  $("#firstName").blur("input", function () {
    if ($(this).val().length >= 3) {
    } else {
      $(this).addClass("bordesRojos-input");
      $(".labelDni5").removeClass("labelArribaInpusDatos");
      $(".labelDni5").addClass("colorLabelIncorrecto-label");
    }
  });

  $("#lastName").on("input", function () {
    if ($(this).val().length >= 3) {
      $(this).addClass("bordesVerdes-input");
      $(".labelDni6").removeClass("colorLabelIncorrecto-label");
    } else {
      $(this).removeClass("bordesVerdes-input");
      $(this).addClass("bordesRojos-input");
    }
  });

  $("#lastName").focus("input", function () {
    $(".labelDni6").addClass("labelArribaInpusDatos");
  });

  $("#lastName").blur("input", function () {
    if ($(this).val().length >= 3) {
    } else {
      $(this).addClass("bordesRojos-input");
      $(".labelDni6").removeClass("labelArribaInpusDatos");
      $(".labelDni6").addClass("colorLabelIncorrecto-label");
    }
  });

  $("#lastName").on("input", function () {
    if ($(this).val().length >= 3) {
      $(this).addClass("bordesVerdes-input");
      $(".labelDni6").removeClass("colorLabelIncorrecto-label");
    } else {
      $(this).removeClass("bordesVerdes-input");
      $(this).addClass("bordesRojos-input");
    }
  });

  $("#lastName").focus("input", function () {
    $(".labelDni6").addClass("labelArribaInpusDatos");
  });

  $("#lastName").blur("input", function () {
    if ($(this).val().length >= 3) {
    } else {
      $(this).addClass("bordesRojos-input");
      $(".labelDni6").removeClass("labelArribaInpusDatos");
      $(".labelDni6").addClass("colorLabelIncorrecto-label");
    }
  });







  $("#ciudadDeCir").on("input", function () {
    if ($(this).val().length >= 4) {
      $(this).addClass("bordesVerdes-input");
      $(".labelDni8").removeClass("colorLabelIncorrecto-label");
    } else {
      $(this).removeClass("bordesVerdes-input");
      $(this).addClass("bordesRojos-input");
    }
  });

  $("#ciudadDeCir").focus("input", function () {
    $(".labelDni8").addClass("labelArribaInpusDatos");
  });

  $("#ciudadDeCir").blur("input", function () {
    if ($(this).val().length >= 4) {
    } else {
      $(this).addClass("bordesRojos-input");
      $(".labelDni8").removeClass("labelArribaInpusDatos");
      $(".labelDni8").addClass("colorLabelIncorrecto-label");
    }
  });

  $("#direccionDeR").on("input", function () {
    if ($(this).val().length >= 3) {
      $(this).addClass("bordesVerdes-input");
      $(".labelDni9").removeClass("colorLabelIncorrecto-label");
    } else {
      $(this).removeClass("bordesVerdes-input");
      $(this).addClass("bordesRojos-input");
    }
  });

  $("#direccionDeR").focus("input", function () {
    $(".labelDni9").addClass("labelArribaInpusDatos");
  });

  $("#direccionDeR").blur("input", function () {
    if ($(this).val().length >= 3) {
    } else {
      $(this).addClass("bordesRojos-input");
      $(".labelDni9").removeClass("labelArribaInpusDatos");
      $(".labelDni9").addClass("colorLabelIncorrecto-label");
    }
  });

  $("#telephone").on("input", function () {
    if ($(this).val().length >= 10) {
      $(this).addClass("bordesVerdes-input");
      $(".labelDni10").removeClass("colorLabelIncorrecto-label");
    } else {
      $(this).removeClass("bordesVerdes-input");
      $(this).addClass("bordesRojos-input");
    }
  });

  $("#telephone").focus("input", function () {
    $(".labelDni10").addClass("labelArribaInpusDatos");
  });

  $("#telephone").blur("input", function () {
    if ($(this).val().length >= 10) {
    } else {
      $(this).addClass("bordesRojos-input");
      $(".labelDni10").removeClass("labelArribaInpusDatos");
      $(".labelDni10").addClass("colorLabelIncorrecto-label");
    }
  });

  $("#emailCorreo").on("input", function () {
    if ($(this).val().length >= 9) {
      $(this).addClass("bordesVerdes-input");
      $(".labelDni11").removeClass("colorLabelIncorrecto-label");
    } else {
      $(this).removeClass("bordesVerdes-input");
      $(this).addClass("bordesRojos-input");
    }
  });

  $("#emailCorreo").focus("input", function () {
    $(".labelDni11").addClass("labelArribaInpusDatos");
  });

  $("#emailCorreo").blur("input", function () {
    if ($(this).val().length >= 9) {
    } else {
      $(this).addClass("bordesRojos-input");
      $(".labelDni11").removeClass("labelArribaInpusDatos");
      $(".labelDni11").addClass("colorLabelIncorrecto-label");
    }
  });

  $("#datepicker").alphanum({
    allow: "1234567890-",
    disallow:
      "!#%&/()=/*?¡¿{}[]ñÑ:;,<>|°+´^`¨†‡ˆ‰Š‹Œâáüzéíóúàèìòùâêîôûäëïöüabcdefghijklmnopqrstuvwxyz_QWERTYUIOPASDFGHJKLÑZXCVBNM$.",
    allowUpper: true,
    allowSpace: false,
  });

  $("#numeroDni").alphanum({
    allow: "1234567890",
    disallow:
      "!#%&/()=/*?¡¿{}[]ñÑ:;,<>|°+´^`¨†‡ˆ‰Š‹Œâáüzéíóúàèìòùâêîôûäëïöüabcdefghijklmnopqrstuvwxyz_QWERTYUIOPASDFGHJKLÑZXCVBNM$.-",
    allowUpper: true,
    allowSpace: false,
  });

  $("#firstName").alphanum({
    allow: "abcdefghijklmnopqrstuvwxyz_QWERTYUIOPASDFGHJKLÑZXCVBNM ",
    disallow:
      "!#%&/()=/*?¡¿{}[]ñÑ:;,<>|°+´^`¨†‡ˆ‰Š‹Œâáüzéíóúàèìòùâêîôûäëïöü$.-1234567890",
    allowUpper: true,
    allowSpace: false,
  });

  $("#lastName").alphanum({
    allow: "abcdefghijklmnopqrstuvwxyz_QWERTYUIOPASDFGHJKLÑZXCVBNM ",
    disallow:
      "!#%&/()=/*?¡¿{}[]ñÑ:;,<>|°+´^`¨†‡ˆ‰Š‹Œâáüzéíóúàèìòùâêîôûäëïöü$.-1234567890",
    allowUpper: true,
    allowSpace: false,
  });



  $("#ciudadDeCir").alphanum({
    allow: "abcdefghijklmnopqrstuvwxyz_QWERTYUIOPASDFGHJKLÑZXCVBNM ",
    disallow:
      "!#%&/()=/*?¡¿{}[]ñÑ:;,<>|°+´^`¨†‡ˆ‰Š‹Œâáüzéíóúàèìòùâêîôûäëïöü$.-1234567890",
    allowUpper: true,
    allowSpace: false,
  });

  $("#telephone").alphanum({
    allow: "1234567890",
    disallow:
      "!#%&/()=/*?¡¿{}[]ñÑ:;,<>|°+´^`¨†‡ˆ‰Š‹Œâáüzéíóúàèìòùâêîôûäëïöü$.-abcdefghijklmnopqrstuvwxyz_QWERTYUIOPASDFGHJKLÑZXCVBNM ",
    allowUpper: true,
    allowSpace: false,
  });

  $("#emailCorreo").alphanum({
    allow: "1234567890.-abcdefghijklmnopqrstuvwxyz_QWERTYUIOPASDFGHJKLÑZXCVBNM@",
    disallow:
      "!#%&/()=/*?¡¿{}[]ñÑ:;,<>|°+´^`¨†‡ˆ‰Š‹Œâáüzéíóúàèìòùâêîôûäëïöü$",
    allowUpper: true,
    allowSpace: false,
  });

  $("#direccionDeR").alphanum({
    allow:
      "abcdefghijklmnopqrstuvwxyz_QWERTYUIOPASDFGHJKLÑZXCVBNM-1234567890./,# ",
    disallow: "!%&/()=*?¡¿{}[]ñÑ:;<>|°+´^`¨†‡ˆ‰Š‹Œâáüzéíóúàèìòùâêîôûäëïöü$",
    allowUpper: true,
    allowSpace: false,
  });
});
