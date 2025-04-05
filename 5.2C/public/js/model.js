const cardList = [];

const createCardData = () => {
    return {
        title: $('#title').val(),
        image: $('#image').val(),
        description: $('#description').val(),
        link: $('#link').val()
    };
};

const getProjects = (callback) => {
    $.get('/api/projects', (response) => {
        if (response.statusCode === 200) {
            callback(response.data);
        }
    });
};
