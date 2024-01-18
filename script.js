function form_validation() {
    // Récupérer les valeurs des champs
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();

    // Réinitialiser les styles des champs et les messages d'erreur
    $(".form-control").removeClass("error");
    $(".error-message").remove();
    $(".success-message").remove();

    // Vérifier la conformité du mot de passe avec le champ de confirmation
    if (password !== confirmPassword) {
        // Mettre en surbrillance les champs d'erreur
        $("#password, #confirmPassword").addClass("error");

        // Afficher un message d'erreur
        $("#confirmPassword").after('<div class="error-message">Les mots de passe ne correspondent pas.</div>');

        return false;
    }

    // Afficher un message de succès
    $(".form-container").append('<div class="success-message">Inscription enregistrée avec succès !</div>');

    // Empêcher le formulaire d'être soumis normalement
    return false;
}
