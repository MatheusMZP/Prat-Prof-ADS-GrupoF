document.addEventListener('DOMContentLoaded', function() {
    // Obtém o tipo de usuário do sessionStorage
    const userType = sessionStorage.getItem('userRole') || 'aluno';
    const sidebar = document.getElementById('sidebar');

    const alunoOptions = `
        <h2>Menu Aluno</h2>
            <a href="#">Home</a>
            <a href="#">Boletim</a>
    `;

    const professorOptions = `
        <h2>Menu Professor</h2>
            <a href="#">Home</a>
            <a href="#">Boletim</a>
            <a href="#">Inserir Notas</a>
            <a href="#">Suporte</a>
    `;

    sidebar.innerHTML = userType === 'professor' ? professorOptions : alunoOptions;
});
