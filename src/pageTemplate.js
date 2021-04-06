const generateMyTeam = myTeam => {

    // Create manager's team
    const generateMgr = manager => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-shot mr-3"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">id${manager.getId()}</li>
                    <li class="list-group-item">email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">office number${manager.getOfficeNum()}</li>
                </ul>
            </div>
        </div>
            `;
    };
    // Repeat like above for engineer here
    // ...tbd


    // Repeat like above for intern here
    // ...tbd


    
}