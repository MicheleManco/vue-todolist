// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: 
//   digitando il tasto invio oppure ciccando su un pulsante,
//   il testo digitato viene aggiunto alla lista




var myapp = new Vue({
    el: "#myapp",
    data: {
        textTasks:"",
        tasks: [
            {
                text: "fare la spesa",
                done: true
            },
            { 
                text: 'Fare il bucato',
                done: false 
            },
            { 
                text: 'lavare i piatti',
                done: false 
            }

        ]
    },
    methods: {
        removeTask: function (index) {
            this.tasks.splice(index, 1)
        },
        addTask: function() {
            newTask = {
                text: this.textTasks,
                done: true
            }
           this.tasks.push(newTask)
        }
    }
});