(function() {
	'use strict';

	var input = document.getElementById('tool-search');
	var resultsBox = document.getElementById('search-results');

	if (!input || !resultsBox) {
		return;
	}

	var MAX_RESULTS = 30;
	var tools = null;
	var toolsPromise = fetch('/search.json')
		.then(function(res) { return res.json(); })
		.then(function(data) { tools = data; return data; })
		.catch(function(err) { console.error('Failed to load search index', err); });

	function clearResults() {
		resultsBox.textContent = '';
		resultsBox.hidden = true;
	}

	function renderMessage(text) {
		resultsBox.textContent = '';

		var message = document.createElement('p');
		message.className = 'search-empty';
		message.textContent = text;
		resultsBox.appendChild(message);
		resultsBox.hidden = false;
	}

	function renderResults(matches, query) {
		if (matches.length === 0) {
			renderMessage('No tools match "' + query + '"');
			return;
		}

		resultsBox.textContent = '';

		var list = document.createElement('ul');
		var shown = matches.slice(0, MAX_RESULTS);

		shown.forEach(function(tool) {
			var item = document.createElement('li');
			var link = document.createElement('a');
			link.href = tool.url;
			link.rel = 'nofollow';

			var name = document.createElement('span');
			name.className = 'search-result-name';
			name.textContent = tool.name;

			var description = document.createElement('span');
			description.className = 'search-result-description';
			description.textContent = tool.description;

			link.appendChild(name);
			link.appendChild(description);
			item.appendChild(link);
			list.appendChild(item);
		});

		resultsBox.appendChild(list);

		if (matches.length > shown.length) {
			var more = document.createElement('p');
			more.className = 'search-more';
			more.textContent = (matches.length - shown.length) + ' more results not shown';
			resultsBox.appendChild(more);
		}

		resultsBox.hidden = false;
	}

	function search(rawQuery) {
		var query = rawQuery.trim();
		var q = query.toLowerCase();

		if (q.length === 0) {
			clearResults();
			return;
		}

		if (tools === null) {
			renderMessage('Loading…');
			toolsPromise.then(function() { search(input.value); });
			return;
		}

		var matches = tools.filter(function(tool) {
			return tool.name.toLowerCase().indexOf(q) !== -1 ||
				(tool.description && tool.description.toLowerCase().indexOf(q) !== -1);
		});

		renderResults(matches, query);
	}

	input.addEventListener('input', function() {
		search(input.value);
	});

	input.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			input.value = '';
			clearResults();
			input.blur();
		}
	});

	document.addEventListener('click', function(e) {
		if (e.target !== input && !resultsBox.contains(e.target)) {
			clearResults();
		}
	});
})();
